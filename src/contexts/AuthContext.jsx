import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { ToastContext } from "./ToastContext";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useContext(ToastContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        if (res.status === 200) {
          const { user: userResponse, token } = res.data;
          const { id } = res.data.user;

          setUser(userResponse);

          localStorage.setItem("@kenzie-hub:token", token);
          localStorage.setItem("@kenzie-hub:id", id);

          addToast({
            type: "sucess",
            title: "Login realizado com sucesso",
          });

          navigate("/home", { replace: true });
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          addToast({
            type: "error",
            title: "Erro ao realizar login",
            description: "Email/Senha incorreto",
          });
        }
      });
  };

  useEffect(() => {
    async function loadUser() {
      const tokenGet = localStorage.getItem("@kenzie-hub:token");

      if (tokenGet) {
        try {
          api.defaults.headers.authorization = `Bearer ${tokenGet}`;

          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
          console.error();
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, onSubmit, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

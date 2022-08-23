import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
          navigate("/home", { replace: true });
        }
      })
      .catch((error) => console.error(error));
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

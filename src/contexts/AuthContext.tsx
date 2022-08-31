import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IUserRegister } from "../Pages/Register";

import api from "../services/api";

import { ToastContext } from "./ToastContext";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: number;
  techs?: IUserTechs[];
  works?: IUserWorks[];
  create_at: Date;
  updated_at: Date;
  avatar_url: string | null;
}

export interface IUserProps {
  user: IUser;
  token: string;
}

interface IUserTechs {
  id: string;
  title: string;
  status: string;
  create_at: Date;
  updated_at: Date;
}

interface IUserWorks {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  create_at: Date;
  updated_at: Date;
}

interface IAuthContext {
  user?: IUser | null;
  onSubmit: (data: IUserRegister) => void;
  loading: boolean;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);

  const { addToast } = useContext(ToastContext);

  const navigate = useNavigate();

  const onSubmit = (data: ILogin) => {
    api
      .post<IUserProps>("/sessions", data)
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
          api.defaults.headers.common.authorization = `Bearer ${tokenGet}`;

          const { data } = await api.get<IUser>("/profile");

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

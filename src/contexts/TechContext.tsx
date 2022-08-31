import { createContext, ReactNode } from "react";

import api from "../services/api";

type IId = string | number;

interface IAddTech {
  title: string;
  status: {
    iniciante: string;
    intermediário: string;
    avançado: string;
  };
}

export interface ITechProviderProps {
  children: ReactNode;
}

interface ITechContext {
  addTech: (data: IAddTech) => void;
  removeTech: (id: IId) => void;
}
export const TechContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({ children }: ITechProviderProps) => {
  const removeTech = (id: IId) => {
    api.delete(`/users/techs/${id}`);
  };

  const addTech = (data: IAddTech) => {
    api.post("/users/techs", data).catch((error) => console.error(error));
  };

  return (
    <TechContext.Provider value={{ addTech, removeTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;

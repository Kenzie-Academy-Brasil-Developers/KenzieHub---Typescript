import { createContext } from "react";

import api from "../services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const removeTech = (id) => {
    api.delete(`/users/techs/${id}`);
  };

  const addTech = (data) => {
    api.post("/users/techs", data).catch((error) => console.error(error));
  };

  return (
    <TechContext.Provider value={{ addTech, removeTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;

import { createContext } from "react";

const initUser = {
  name: "",
  age: 0,
};

export const UserContext = createContext(initUser);

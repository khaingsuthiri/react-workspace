import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const initUser = {
  name: "",
  age: 0,
  handleName: (name: string) => {},
  handleAge: (age: number) => {},
};

const UserContext = createContext(initUser);

export default function UserProvider({ children }: Props) {
  const [name, setName] = useState(initUser.name);
  const [age, setAge] = useState(initUser.age);

  function handleName(name: string) {
    setName(name);
  }

  function handleAge(age: number) {
    setAge(age);
  }

  const value = {
    name,
    age,
    handleName,
    handleAge,
  };

  return <UserContext value={value}>{children}</UserContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext);
}

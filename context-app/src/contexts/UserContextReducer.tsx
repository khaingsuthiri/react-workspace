import { createContext, useContext, useReducer } from "react";
import type { Dispatch } from "react";

interface Props {
  children: React.ReactNode;
}

interface User {
  name: string;
  age: string;
}

interface UserAction {
  type: string;
  payload: string;
}

interface ContextType {
  user: User;
  dispatch: Dispatch<UserAction>;
}

const initUser = {
  name: "",
  age: "",
};

const initContext = {
  user: initUser,
  dispatch: () => {},
};

const UserContext = createContext<ContextType>(initContext);

function userReducer(state: User, action: UserAction) {
  switch (action.type) {
    case "handleName":
      return { name: action.payload, age: state.age };
    case "handleAge":
      return { name: state.name, age: action.payload };
    default:
      return state;
  }
}

export default function UserProvider({ children }: Props) {
  const [user, dispatch] = useReducer(userReducer, initUser);

  const value = {
    user,
    dispatch,
  };

  return <UserContext value={value}>{children}</UserContext>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  return useContext(UserContext);
}

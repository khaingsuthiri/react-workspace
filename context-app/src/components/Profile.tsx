import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Profile() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
    </div>
  );
}

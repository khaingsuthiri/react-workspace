import { useUser } from "../contexts/UserContext";

export default function Profile() {
  // const user = useContext(UserContext);
  const { name, age, handleName, handleAge } = useUser();
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <button onClick={() => handleName("Pont Pont Lay")}>Update Name</button>
      <button onClick={() => handleAge(3)}>Update Age</button>
    </div>
  );
}

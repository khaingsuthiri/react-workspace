import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import { UserContext } from "./contexts/UserContext";

function App() {
  const user = {
    name: "Pont Pont",
    age: 5,
  };

  return (
    <>
      <Counter />
      <UserContext value={user}>
        <Profile />
      </UserContext>
    </>
  );
}

export default App;

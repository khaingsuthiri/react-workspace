import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <Counter />
      <UserProvider>
        <Profile />
      </UserProvider>
    </>
  );
}

export default App;

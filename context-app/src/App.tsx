import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import UserProvider from "./contexts/UserContextReducer";

function App() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <>
      <Counter key={resetKey} />
      <button onClick={() => setResetKey(1)}>Reset Counter</button>
      <UserProvider>
        <Profile />
      </UserProvider>
    </>
  );
}

export default App;

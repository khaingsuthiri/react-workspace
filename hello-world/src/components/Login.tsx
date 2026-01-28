import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("pont");
  const fullname = "Ma" + username;

  function login(name: string) {
    setUsername("He He");
    console.log("Login .....", username);
    setUsername((prevUsername) => prevUsername + "ha ha");
    console.log("Login .....", username);
  }

  return (
    <>
      <h1>{fullname}</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button onClick={() => login("pont")}>Login</button>
    </>
  );
}

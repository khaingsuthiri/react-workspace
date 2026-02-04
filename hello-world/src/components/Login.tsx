import { useRef, useState } from "react";

export default function Login() {
  // const [username, setUsername] = useState("");
  const inputElement = useRef<HTMLInputElement>(null);

  function login() {
    console.log("Username :::", inputElement.current?.value);
  }

  return (
    <>
      <input
        type="text"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        ref={inputElement}
      />
      <br />
      <button onClick={login}>Login</button>
    </>
  );
}

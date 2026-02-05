import { useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Login() {
  const portalRoot = document.getElementById("portal-root");
  // const [username, setUsername] = useState("");
  const inputElement = useRef<HTMLInputElement>(null);

  function login() {
    console.log("Username :::", inputElement.current?.value);
  }

  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <>
      <input
        type="text"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        ref={inputElement}
      />
      <br />
      <button onClick={login}>Login</button>
    </>,
    portalRoot,
  );
}

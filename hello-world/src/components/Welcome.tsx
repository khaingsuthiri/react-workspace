import Login from "./Login";
import "./Welcome.css";

export default function Welcome() {
  const name = "Pont Pont";
  const guest = "Guest";
  const isLoggedIn = false;

  return (
    <>
      <h1
        className="header"
        style={{
          color: "red",
        }}
      >
        Welcome...{isLoggedIn ? name : guest}
      </h1>
      {!isLoggedIn && <Login />}
    </>
  );
}

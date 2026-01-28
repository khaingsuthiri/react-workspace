import Parent from "./components/Parent";
import Todos from "./components/Todos";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <>
      <Welcome />
      <Todos />
      <br />
      <br />
      <Parent />
    </>
  );
}

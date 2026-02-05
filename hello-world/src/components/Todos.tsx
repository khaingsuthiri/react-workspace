import { useRef } from "react";
import Todo, { type TodoRef } from "./Todo";

export default function Todos() {
  const todos = ["sleep", "eat", "go", "drink"];

  const todoEl = useRef<TodoRef>(null);

  function welcomeTest() {
    todoEl.current?.greet();
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo ref={todoEl} key={todo} />
        ))}
      </ul>
      <button onClick={welcomeTest}>Click Here</button>
    </>
  );
}

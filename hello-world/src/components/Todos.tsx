import { useCallback, useEffect, useRef, useState } from "react";
import Todo, { type TodoRef } from "./Todo";

export interface TodoItem {
  id: number;
  todo: string;
}

export default function Todos() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const todoEl = useRef<TodoRef>(null);

  const welcomeTest = useCallback(() => {
    todoEl.current?.greet();
  }, []);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      setTodos(data.todos);
    }
    getTodos();
  }, [welcomeTest]);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo ref={todoEl} key={todo.id} todoItem={todo} />
        ))}
      </ul>
      <button onClick={welcomeTest}>Click Here</button>
      {/* <button onClick={getTodos}>Get All Todos</button> */}
    </>
  );
}

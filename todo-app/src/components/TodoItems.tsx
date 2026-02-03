import { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../models/Todo";

export default function TodoItems() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function addItem() {
    const todo = new Todo();
    todo.id = crypto.randomUUID();
    todo.text = todoText;
    todo.isDone = false;
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodoText("");
  }

  function toggleDone(id: string) {
    const modifiedTodos = todos.map((todo) => {
      if (todo.id === id) todo.isDone = !todo.isDone;
      return todo;
    });
    setTodos(modifiedTodos);
  }

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <div>
        <ul>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} onChecked={toggleDone} />
            ))}
        </ul>

        <hr />

        <ul>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} onChecked={toggleDone} />
            ))}
        </ul>
      </div>
    </>
  );
}

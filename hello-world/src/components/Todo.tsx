import { useImperativeHandle, type Ref } from "react";
import type { TodoItem } from "./Todos";

export type TodoRef = {
  greet: () => void;
};

type Props = {
  ref: Ref<TodoRef>;
  todoItem: TodoItem;
};

export default function Todo({ ref, todoItem }: Props) {
  function sayGreeting() {
    console.log("Hello");
  }

  useImperativeHandle(ref, () => ({
    greet: sayGreeting,
  }));

  return <li>{todoItem.todo}</li>;
}

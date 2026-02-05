import { useImperativeHandle, type Ref } from "react";

export type TodoRef = {
  greet: () => void;
};

type Props = {
  ref: Ref<TodoRef>;
};

export default function Todo({ ref }: Props) {
  function sayGreeting() {
    console.log("Hello");
  }

  useImperativeHandle(ref, () => ({
    greet: sayGreeting,
  }));

  return <li>Todo</li>;
}

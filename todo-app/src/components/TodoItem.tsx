import type { Todo } from "../models/Todo";

type Props = {
  todo: Todo;
  onChecked: (id: string) => void;
};

export default function TodoItem({ todo, onChecked }: Props) {
  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        name="todo-checkbox"
        id="todo-id"
        onClick={() => onChecked(todo.id)}
        defaultChecked={todo.isDone}
      />
      {todo.text}
    </li>
  );
}

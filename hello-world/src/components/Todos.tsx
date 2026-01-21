export default function Todos() {
  const todos = ["sleep", "eat", "go", "drink"];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

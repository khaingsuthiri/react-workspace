import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prev) => ++prev);
  }

  function decreaseCount() {
    setCount((prev) => --prev);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

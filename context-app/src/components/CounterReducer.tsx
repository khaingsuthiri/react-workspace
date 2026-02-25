import { useReducer } from "react";

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function CounterReducer() {
  const [count, dispatcher] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatcher({ type: "increment" })}>
        Increase
      </button>
      <button onClick={() => dispatcher({ type: "decrement" })}>
        Decrease
      </button>
      <button onClick={() => dispatcher({ type: "reset" })}>Reset</button>
    </div>
  );
}

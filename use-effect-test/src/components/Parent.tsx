import { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  const handlePrint = useCallback(() => {
    console.log("Hello Pont!");
  }, []);

  //   function handlePrint() {
  //     console.log("Hello Pont!");
  //   }

  return (
    <>
      <Child count={count} onPrint={handlePrint} />
      <button onClick={() => setCount((prev) => ++prev)}>Increase</button>
    </>
  );
}

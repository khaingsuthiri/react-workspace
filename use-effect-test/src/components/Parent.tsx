import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [lastName, setLastName] = useState("Pont");

  const name = useMemo(() => {
    return "Pont " + lastName;
  }, [lastName]);

  const handlePrint = useCallback(() => {
    console.log("Hello Pont!");
    console.log("Real Name: ", name);
  }, [name]);

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

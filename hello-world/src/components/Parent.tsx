import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [loan, setLoan] = useState(100000);

  const handleAfterPaid = () => {
    alert("Congratulation !!!");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child
        loan={loan}
        onPaid={() => setLoan(0)}
        onAfterPaid={handleAfterPaid}
      />
    </div>
  );
}

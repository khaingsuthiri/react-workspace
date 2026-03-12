import "./App.css";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { CheckCircle2Icon } from "lucide-react";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>
      <Button variant="outline">Button</Button>
      <hr />
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to
          your email address.
        </AlertDescription>
      </Alert>
    </>
  );
}

export default App;

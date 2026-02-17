import { useEffect } from "react";

interface Props {
  count: number;
  onPrint: () => void;
}

export default function Child({ count, onPrint }: Props) {
  useEffect(() => {
    onPrint();
  }, [onPrint]);

  return <p>Count: {count}</p>;
}

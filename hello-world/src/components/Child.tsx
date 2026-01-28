type Props = {
  loan: number;
  onPaid: () => void;
  onAfterPaid: () => void;
};

export default function Child({ loan, onPaid, onAfterPaid }: Props) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Loan: {loan}</p>
      <button
        onClick={() => {
          onPaid();
          onAfterPaid();
        }}
      >
        Paid
      </button>
    </div>
  );
}

import css from "./TransactionHistory.module.css";
import Transaction from "./Transaction";

function TransactionHistory({ transactions }) {
  return (
    <table className={css.Table}>
      <thead>
        <tr className={css.Th}>
          <th className={css.Th}>Type</th>
          <th className={css.Th}>Amount</th>
          <th className={css.Th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

import css from "./TransactionHistory.module.css";

function Transaction({ type, amount, currency }) {
  return (
    <tr className={css.Ttr}>
      <td className={css.Td}>{type}</td>
      <td className={css.Td}>{amount}</td>
      <td className={css.Td}>{currency}</td>
    </tr>
  );
}

export default Transaction;

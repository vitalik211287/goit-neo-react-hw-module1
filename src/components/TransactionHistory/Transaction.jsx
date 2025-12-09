import css from "./TransactionHistory.module.css";

function Transaction({ type, amount, currency }) {
  return (
    <tr className={css.Tr}>
      <td className={css.Td}>{type[0].toUpperCase()+ type.slice(1) }</td>
      <td className={css.Td}>{amount}</td>
      <td className={css.Td}>{currency}</td>
    </tr>
  );
}

export default Transaction;

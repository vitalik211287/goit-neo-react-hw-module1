import css from "./FriendsList.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}
export default FriendListItem;

import css from "./Profile.module.css";

function Profile(props) {
  const { avatar, username, tag, location,  stats } =
    props;
  const formattedStats = Object.entries(stats).map(([name, value]) => ({
    label: name[0].toUpperCase() + name.slice(1),
    value,
  }));
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        <ul className={css.stats}>
          {formattedStats.map(({ label, value }) => (
            <li className={css.item} key={label}>
              <span className={css.label}>{label}</span>
              <span className={css.quantity}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Profile;
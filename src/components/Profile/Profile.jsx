import css from "./Profile.module.css";

function Profile(props) {
  const { avatar, username, tag, location,  stats } =
    props;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        <ul className={css.stats}>
          {Object.entries(stats).flatMap((stat) => {
            return (
              <li className={css.item} key={stat[1]}>
                <span className={css.label}>
                  {stat[0].charAt(0).toUpperCase() + stat[0].slice(1)}
                </span>
                <span className={css.quantity}>{stat[1]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


export default Profile;
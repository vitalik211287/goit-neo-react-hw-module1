import Profile from 'components/Profile/Profile';
import FriendList from "components/FriendList/FriendList";
import user from "components/Profile/user.json";
import friendsData from "components/FriendList/friendsData.json";
import transactions from "components/TransactionHistory/transactions.json";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;

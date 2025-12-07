import Profile from './components/Profile/Profile';
import user from "./components/Profile/user.json";

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
      {/* <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} /> */}
    </>
  );
}

export default App;

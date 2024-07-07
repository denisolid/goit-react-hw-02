import FriendListItem from "./FriendsListItem";
import s from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={s.friends}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

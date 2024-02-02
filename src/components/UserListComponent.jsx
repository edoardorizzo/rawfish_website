import InfiniteScroll from "react-infinite-scroll-component";
import UserCardComponent from "./UserCardComponent";

function UserListComponent({ users, filteredUsers, fetchData, hasMore }) {
  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {(filteredUsers.length > 0 ? filteredUsers : users).map((user, index) => (
        <UserCardComponent
          key={index}
          userImage={user.picture.medium}
          userName={user.name.first}
          userSurname={user.name.last}
          city={user.location.city}
          country={user.location.country}
          state={user.location.state}
        />
      ))}
    </InfiniteScroll>
  );
}

export default UserListComponent;

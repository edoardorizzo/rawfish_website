import "./UserDetailPageStyle.scss";
import UserDetailDataComponent from "../components/UserDetailDataComponent";
import BackComponent from "../components/BackComponent";
import { useParams } from "react-router-dom";

function UserDetailPage({ users }) {
  const { userId } = useParams();
  const user = users.find((user) => user.name.first === userId);

  const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <>
      <div className="user_detail_page">
      <BackComponent></BackComponent>
        <UserDetailDataComponent
          userImage={user.picture.large}
          userGender={user.gender}
          userName={userName}
          userEmail={user.email}
          userNumber={user.cell}
          userId={user.id.name}
          userIdValue={user.id.value}
          userNat={user.nat}
          userCell={user.cell}
        />
        
      </div>
    </>
  );
}

export default UserDetailPage;

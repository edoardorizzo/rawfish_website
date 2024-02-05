import "../partials/UserDetailPageStyle.scss";
import UserDetailDataComponent from "../components/UserDetailDataComponent";
import BackComponent from "../components/buttons/BackComponent";
import AccordionComponent from "../components/AccordionComponent";
import { useParams } from "react-router-dom";

function UserDetailPage({ users }) {
  const { userId } = useParams();
  const user = users.find((user) => user.name.first === userId);

  const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const userCountry = `${user.location.city} ${user.location.street.number} ${user.location.street.name}`;
  const userNat = `${user.location.state} ${user.location.country} ${user.location.postcode}`;
  const userNumber = `${user.phone} --- ${user.cell}`;

  return (
    <div className="user_detail_page">
      <BackComponent />
      <UserDetailDataComponent
        userImage={user.picture.large}
        userGender={user.gender}
        userName={userName}
        userEmail={user.email}
        userNumber={userNumber}
        userId={user.id.name}
        userIdValue={user.id.value}
        userNat={userNat}
        userCountry={userCountry}
      />
      <AccordionComponent
      userUuid={user.login.uuid}
      userUserName={user.login.username}
      userPassword={user.login.password}
      userSalt={user.login.salt}
      userMd5={user.login.md5}
      userSha1={user.login.sha1}
      userSha256={user.login.sha256}

      />
    </div>
  );
}

export default UserDetailPage;

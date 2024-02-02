import { Link } from "react-router-dom";

function UserCardComponent({
  userImage,
  userName,
  userSurname,
  city,
  country,
  state,
}) {
  return (
    <>
      <div className="user_card_container">
        <div className="left_card">
          <div className="image_container">
            <img src={userImage} alt="" />
          </div>
          <h4>{`${userName} ${userSurname}`}</h4>
        </div>

        <div className="center_card">
          <p>{`${city} ${state} ${country}`}</p>
        </div>

        <Link to={`/user/${userName}`}>
          <button>Visit Profile</button>
        </Link>
      </div>
    </>
  );
}

export default UserCardComponent;

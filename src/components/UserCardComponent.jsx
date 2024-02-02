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
        <div className="image_container">
          <img src={userImage} alt="" />
        </div>
        <h4>{userName}</h4>
        <h4>{userSurname}</h4>
        <p>{`${city} ${state} ${country}`}</p>
      </div>
    </>
  );
}

export default UserCardComponent;

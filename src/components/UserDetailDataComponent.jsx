import "../partials/UserDetailPageStyle.scss";

function UserDetailDataComponent({
  userImage,
  userGender,
  userName,
  userEmail,
  userNumber,
  userId,
  userIdValue,
  userNat,
  userCell,
}) {
  return (
    <>
      <div className="user_detail_data">
        <div className="top_row">
          <h4>Employee Details</h4>
        </div>
        <div className="center_row">
          <div className="user_detail_data_image">
            <img src={userImage} alt="" />
          </div>
          <div className="center_detail_card">
            <h1>{userName}</h1>

            <div className="center_detail_card_data">
              <div className="gender">
                <p>Gender</p>
                <div>{userGender}</div>
              </div>
              <div className="email">
                <p>Email</p>
                <div>{userEmail}</div>
              </div>
              <div className="number">
                <p>Number</p>
                <div>{userNumber}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_row">
          <div className="data_container_box_component">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              height="16"
            >
              <path
                fill="#4effca"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
            <p>{userId}</p>
            <p>{userIdValue}</p>
          </div>
          <div className="data_container_box_component">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="16"
              height="16"
            >
              <path
                fill="#4effca"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            <p>{userNat}</p>
          </div>
          <div className="data_container_box_component">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
            >
              <path
                fill="#4effca"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            <p>{userCell}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetailDataComponent;

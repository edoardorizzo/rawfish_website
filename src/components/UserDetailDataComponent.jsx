import "../partials/UserDetailPageStyle.scss";
import { useState } from "react";

function UserDetailDataComponent({
  userImage,
  userGender,
  userName,
  userEmail,
  userNumber,
  userId,
  userIdValue,
  userNat,
  userCountry,
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
                <p>Phone --- Cell</p>
                <div>{userNumber}</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
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
              viewBox="0 0 448 512"
              width="16"
              height="16"
            >
              <path
                fill="#4effca"
                d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
              />
            </svg>
            <p>{userCountry}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetailDataComponent;

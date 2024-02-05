import { useState } from "react";

function AccordionComponent({
  userUuid,
  userUserName,
  userPassword,
  userSalt,
  userMd5,
  userSha1,
  userSha256,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="accordion" onClick={() => setVisible(!visible)}>
        <div className="accordion_item">
          <div className="accordion_title">
            <h2>Show Log Data</h2>
            <div>{visible ? "-" : "+"}</div>
          </div>
          {visible && (
            <div className="accordion_content">
              <ul>
                <li>
                  <strong>Uuid:</strong> {userUuid}
                </li>
                <li>
                  <strong>Username:</strong> {userUserName}
                </li>
                <li>
                  <strong>Password:</strong> {userPassword}
                </li>
                <li>
                  <strong>Salt:</strong> {userSalt}
                </li>
                <li>
                  <strong>Md5:</strong> {userMd5}
                </li>
                <li>
                  <strong>Sha1:</strong> {userSha1}
                </li>
                <li>
                  <strong>Sha256:</strong> {userSha256}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AccordionComponent;

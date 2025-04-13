import React from "react";
import UserCard from "./UserCard";
import "../styles/styles.css";

const UserList = ({ users }) => {
  const renderEmpty = () => (
    <div className="emptyContainer">
      <p className="emptyText">No Users found</p>
    </div>
  );

  return (
    <div className={`listContainer ${users.length === 0 ? "emptyList" : ""}`}>
      {users.length === 0
        ? renderEmpty()
        : users.map((user, index) => (
            <React.Fragment key={user._id}>
              <UserCard user={user} />
              {index < users.length - 1 && <div className="separator" />}
            </React.Fragment>
          ))}
    </div>
  );
};

export default UserList;

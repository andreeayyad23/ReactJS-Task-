import React from "react";
import "../styles/styles.css";

const UserCard = ({ user }) => {
  const { name, email, phone, company, address } = user;

  return (
    <div className="card">
      <img
        className="avatar"
        src={`https://i.pravatar.cc/150?u=${user.id}`}
        alt={name}
      />
      <div className="card-content">
        <h3 className="name">{name}</h3>
        <div className="badge">{user.username}</div>
        <p className="email">{email}</p>
        <div className="badge">{user.website}</div>
        <p className="detail">Phone: {phone}</p>
        <p className="detail">Company: {company.name}</p>
        <p className="detail">Catchphrase: {company.catchPhrase}</p>
        <div className="badge">Status: {company.bs}</div>
        <p className="address">
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
          {address.country},{address.geo.lat}, {address.geo.lng}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

import React from "react";
import './style/userCard.css'

const UserCard = ({ user, deleteUser, setUpdateInfo }) => {

  const handleEdit = ()=>{
    setUpdateInfo(user)
  }

  return (
    <article className="card">
      <h3 className="card__title">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="card__body">
        <li className="card__item">
          <span className="card__span">Email</span>
          {user.email}
        </li>
        <li className="card__item">
          <span className="card__span">Birthday</span>
          {user.birthday}
        </li>
      </ul>
      <footer className="card__footer">
        <button className="card__btn card__btn__trash" onClick={() => deleteUser(user.id)}>
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>
        <button className="card__btn card__btn__edit" onClick={handleEdit}>
          <i className="fa-sharp fa-solid fa-marker"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;

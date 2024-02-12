import React from "react";
import "./styles/cardUser.css";

const CardUser = ({ user, deleteUser, setEditUser, setIsOpen }) => {
  const handleDelete = () => {
    deleteUser("/users/", user.id);
  };
  const handleEdit = () => {
    setEditUser(user);
    setIsOpen(true);
  };

  return (
    <article className="card__container">
      {" "}
      {/* Añadir clase card__container */}
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <ul>
        <li>
          <span>Correo</span>
          <span>{user.email}</span>
        </li>
        <li>
          <span>Cumpleaños</span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <button className="card__btn" onClick={handleDelete}>
        <box-icon name="trash"></box-icon>
      </button>
      <button className="card_btn_1" onClick={handleEdit}>
        <box-icon name="edit-alt"></box-icon>
      </button>
    </article>
  );
};

export default CardUser;

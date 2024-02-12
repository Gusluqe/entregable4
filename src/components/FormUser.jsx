import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUser.css";

function FormUser({
  createUser,
  editUser,
  upDateUser,
  setEditUser,
  isOpen,
  setIsOpen,
}) {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(editUser);
  }, [editUser]);

  const submit = (data) => {
    if (editUser) {
      upDateUser("/users", editUser.id, data);
      setEditUser();
    } else {
      createUser("/users", data);
    }
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`form__background ${isOpen && "able"} `}>
      <form className="form__conteiner" onSubmit={handleSubmit(submit)}>
        <div className="form__close" onClick={handleClose}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <h2 className="form__title">Nuevo Usuario</h2>
        <div className="form__item">
          <label htmlFor="email">
            Email <br />{" "}
          </label>
          <input {...register("email")} id="email" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Password <br />{" "}
          </label>
          <input {...register("password")} id="password" type="password" />
        </div>
        <div className="form__item">
          <label htmlFor="first_name">
            First Name <br />{" "}
          </label>
          <input {...register("first_name")} id="first_name" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="last_name">
            Last Name <br />{" "}
          </label>
          <input {...register("last_name")} id="last_name" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="birthday">
            Birthday <br />{" "}
          </label>
          <input {...register("birthday")} id="birthday" type="date" />
        </div>
        <div className="form__submit">
          <button className="form__btn">Agregar nuevo usuario</button>
        </div>
      </form>
    </div>
  );
}

export default FormUser;

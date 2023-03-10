import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./style/formUser.css"

const FormUser = ({ createNewUser, updateInfo, updateUser, setUpdateInfo,setCloseForm }) => {
  //console.log(updateInfo)

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const { register, reset, handleSubmit } = useForm();

  const submit = (data) => {
    if (updateInfo) {
      //actualisa
      updateUser(updateInfo.id, data);
      setUpdateInfo()
    } else {
      //crear
      createNewUser(data);
    }
    setCloseForm(true)

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
     <div onClick={()=> setCloseForm(true)} className="form__x">❌</div>
      <h2 className="form__title">{updateInfo ? 'Update User' : 'Create User'}</h2>
      <div className="form__div">
        <label className="form__label" htmlFor="email">Email</label>
        <input className="form__input" type="email" id="email" {...register("email")} />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="password">Password</label>
        <input className="form__input" type="password" id="password" {...register("password")} />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="first_name">First Name</label>
        <input className="form__input" type="text" id="first_name" {...register("first_name")} />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="last_name">Last Name</label>
        <input className="form__input" type="text" id="last_name" {...register("last_name")} />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="birthday">Birthday</label>
        <input className="form__input" type="date" id="birthday" {...register("birthday")} />
      </div>
      <button className="form__btn">Submit</button>
    </form>
  );
};

export default FormUser;

import axios from "axios";
import { useState } from "react";
const useCrud = () => {
  const [users, setUsers] = useState();

  const getAlUsers = () => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const createNewUser = (data) => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAlUsers();
      })
      .catch((err) => console.log(err));
  };
  //console.log(users);

  const deleteUser = (id) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAlUsers();
      })
      .catch((err) => console.log(err));
  };
  const updateUser = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(URL, data)
      .then((res) => {
        console.log(res);
        getAlUsers();
      })
      .catch((err) => console.log(err));
  };

  return { users, getAlUsers, createNewUser, deleteUser, updateUser };
};

export default useCrud;
 
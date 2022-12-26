import { useEffect, useState } from "react";
import "./App.css";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import useCrud from "./hook/useCrud";

function App() {
  
  const [closeForm, setCloseForm] = useState(true)

  const { users, getAlUsers, createNewUser, deleteUser, updateUser } = useCrud();
  const [updateInfo, setUpdateInfo] = useState();

  useEffect(() => {
    getAlUsers();
  }, []);

  return (
    <div className="App">
    <div className="container">
      <h1>User</h1>
      <button onClick={() => setCloseForm(false)} className="App__btn">Open Form</button>
      </div>
      <div className={`form-container ${closeForm &&'close__form'}`}>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUser={updateUser}
        setUpdateInfo={setUpdateInfo}
        setCloseForm={setCloseForm}
      />
      </div>
      <div className="user-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdateInfo={setUpdateInfo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

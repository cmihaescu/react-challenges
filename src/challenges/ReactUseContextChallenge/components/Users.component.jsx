import { useContext } from "react";
import { usersArray } from "../db";
import { UsersContext } from "../contexts/userContext";

const Users = () => {
  const { user, setUser } = useContext(UsersContext);

  const handleOnUserChange = (e) => {
    let selectedUser = usersArray.filter((user) => {
      return user.name === e.target.value;
    })[0];
    setUser(selectedUser);
  };

  return (
    <div>
      <h1>Users</h1>
      <select onChange={(e) => handleOnUserChange(e)} name="users" id="users">
        {usersArray.map((user, i) => {
          return <option key={i}>{user.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Users;

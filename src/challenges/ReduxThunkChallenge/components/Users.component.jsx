import { usersArray } from "../db";
import { useDispatch } from "react-redux";
import { setUser } from "../reduxSlices/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  const handleOnUserChange = (e) => {
    let selectedUser = usersArray.filter((user) => {
      return user.name === e.target.value;
    })[0];
    dispatch(setUser(selectedUser));
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

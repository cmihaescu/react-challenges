import { useState } from "react";
import "./FormChallenge.styles.css";

export default function Form() {
  const [formData, setFormData] = useState({});
  const { username, fullName, age } = formData;
  const searchParams = new URLSearchParams(document.location.search);

  const handleFormChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="Form">
      <h1>Form Challenge</h1>
      <form>
        <label htmlFor="Username">Username:</label>
        <input
          type="search"
          name="Username"
          onChange={(e) => handleFormChange(e)}
        ></input>
        <label htmlFor="FullName">FullName:</label>
        <input
          type="search"
          name="FullName"
          onChange={(e) => handleFormChange(e)}
        ></input>
        <label htmlFor="Age">Age:</label>
        <input
          type="search"
          name="Age"
          onChange={(e) => handleFormChange(e)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        Request sent to DB:
        <ul>
          <li>UserName:{searchParams.get("Username")}</li>
          <li>FullName:{searchParams.get("FullName")}</li>
          <li>Age: {searchParams.get("Age")}</li>
        </ul>
      </div>
    </div>
  );
}

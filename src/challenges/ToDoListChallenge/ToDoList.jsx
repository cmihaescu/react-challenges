import { useState } from "react";
import "./ToDoList.styles.css";
/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function ToDoList() {
  const [cities, setCities] = useState([]);
  const [inputContent, setInputContent] = useState("");

  const addCities = () => {
    setCities([...cities, inputContent]);
    setInputContent("");
  };
  const removeItem = (i) => {
    let filteredCities = cities.filter((city, index) => index !== i);
    setCities([...filteredCities]);
  };
  const clearList = () => {
    setCities([]);
  };

  return (
    <div className="to-do-list-container">
      <input
        id="input"
        type="search"
        name="city"
        placeholder="Add city"
        value={inputContent}
        onChange={(event) => setInputContent(event.target.value)}
      ></input>
      <button onClick={addCities}>Add</button>
      <button onClick={clearList}>Clear list</button>
      <ul>
        {cities.map((city, index) => {
          return (
            <>
              <li key={index}>{city}</li>
              <button onClick={() => removeItem(index)}>X</button>
            </>
          );
        })}
      </ul>
    </div>
  );
}

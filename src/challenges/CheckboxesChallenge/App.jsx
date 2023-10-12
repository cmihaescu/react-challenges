import * as React from "react";
import { Checkbox } from "./Checkbox";
import "./style.css";
import { list } from "./list";

const App = () => {
  const [mainCheck, setMainCheck] = React.useState(false);
  const [checkboxes, setCheckboxes] = React.useState(list);

  const handleMainCheck = () => {
    setMainCheck(!mainCheck);
    const updateCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      isChecked: !mainCheck,
    }));
    setCheckboxes(updateCheckboxes);
  };

  const handleCheckboxes = (id) => {
    const updateCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return {
          ...checkbox,
          isChecked: !checkbox.isChecked,
        };
      } else {
        return {
          ...checkbox,
        };
      }
    });
    if (updateCheckboxes.every((checkbox) => checkbox.isChecked === true)) {
      setMainCheck(true);
    } else {
      setMainCheck(false);
    }
    setCheckboxes(updateCheckboxes);
  };

  return (
    <div className="container">
      <div className="check-all-checkbox-container">
        <input
          type="checkbox"
          checked={mainCheck}
          onChange={handleMainCheck}
        ></input>
        Select All
      </div>
      <div className="checkboxes-container">
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.id}
            label={checkbox.name}
            checked={checkbox.isChecked}
            onChange={() => handleCheckboxes(checkbox.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

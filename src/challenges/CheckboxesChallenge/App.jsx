import * as React from "react";
import Checkbox from "./Checkbox";
import "./style.css";
import { list } from "./list";

export default function App() {
  const [mainCheck, setMainCheck] = React.useState(false);
  const [updatedList, setUpdatedList] = React.useState(list);

  const handleMainCheckbox = () => {
    setMainCheck(!mainCheck);
  };

  const handleCheckboxesChange = (id, checked) => {
    console.log("id inside main", id, !checked);
  };

  return (
    <div className="container">
      <div className="check-all-checkbox-container">
        <input
          type="checkbox"
          onChange={handleMainCheckbox}
          checked={mainCheck}
        />{" "}
        Select All
      </div>
      <div className="checkboxes-container">
        {list.map((item) => (
          <Checkbox
            key={item.id}
            id={item.id}
            checked={item.isChecked}
            label={item.name}
            onChange={(id, checked) => handleCheckboxesChange(id, checked)}
          />
        ))}
      </div>
    </div>
  );
}

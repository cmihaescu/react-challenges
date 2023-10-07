import * as React from "react";

export default function Checkbox({ id, checked, label, onChange }) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    onChange(id, isChecked);
    console.log(e.target.checked, id);
  };

  return (
    <div className="checkbox">
      <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} />
      {label}
    </div>
  );
}

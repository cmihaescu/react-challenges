import * as React from "react";

export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" onChange={onChange} checked={checked}></input>{" "}
      {label}
    </div>
  );
};

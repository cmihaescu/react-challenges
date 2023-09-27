import { useState } from "react";
import "./ProgressBar.styles.css";

export const ProgressBar = () => {
  const [progressBarFill, setProgressBarFill] = useState(0);

  const handleChange = (e) => {
    setProgressBarFill(e.target.value);
  };

  const progressBarFillStyles = {
    width: `${progressBarFill}%`,
    transition: "width 1s ease-in-out",
  };

  return (
    <div className="progress-bar-container">
      <h2>Progress bar</h2>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={progressBarFillStyles}
          animateOnRender={true}
        >
          <span>{progressBarFill}%</span>
        </div>
      </div>
      <div>
        <span>Input Percentage:</span>
        <label htmlFor="progress-bar"></label>
        <input
          name="progress-bar"
          type="number"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
    </div>
  );
};

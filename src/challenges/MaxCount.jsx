import { useEffect, useState } from "react";
import "./MaxCount.styles.css";

export default function MaxCount() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [isExpired, setIsExpired] = useState(false);
  const [timer, setTimer] = useState(10);

  const handleClick = () => {
    setNumberOfClicks((numberOfClicks) => numberOfClicks + 1);
  };
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      setIsExpired(true);
    }
  }, [timer]);

  return (
    <div className="counter-container">
      <h3>No of Clicks until timer expires</h3>
      <div className="timer-container">
        <span>{numberOfClicks}</span>
        Time left: {timer} seconds
        {!isExpired && <button onClick={() => handleClick()}>+</button>}
      </div>
    </div>
  );
}

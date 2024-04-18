import { useState } from "react";
import MutationObserverComponent from "./MutationObserverComponent";

export default function MyApp() {
  const [unmount, setUnmount] = useState(true);

  const handleButtonClick = () => {
    setUnmount(!unmount);
  };
  return (
    <div>
      <h1>Mutation Observer Challenge</h1>
      {unmount && <MutationObserverComponent />}
      <button onClick={handleButtonClick}>
        Toggle Mutation Observer component
      </button>
    </div>
  );
}

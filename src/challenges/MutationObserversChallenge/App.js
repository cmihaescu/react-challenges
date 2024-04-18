import { useState } from "react";
import MutationObserverComponent from "./MutationObserverComponent";

export default function MyApp() {
  const [mount, setMount] = useState(true);

  const handleButtonClick = () => {
    setMount(!mount);
  };
  return (
    <div>
      <h1>Mutation Observer Challenge</h1>
      {mount && <MutationObserverComponent />}
      <button onClick={handleButtonClick}>
        Toggle Mutation Observer component
      </button>
    </div>
  );
}

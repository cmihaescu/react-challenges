import { useState, useRef, useEffect } from "react";

const MutationObserverComponent = () => {
  const [message, setMessage] = useState("");
  let messageElementRef = useRef(null);
  let inputElementRef = useRef(null);
  let containerElementRef = useRef(null);

  useEffect(() => {
    const observerCallback = function (mutationsList, observer) {
      console.log("message observer fired");
    };
    const inputElement = messageElementRef.current;
    let messageObserver = new MutationObserver(observerCallback);
    messageObserver.observe(inputElement, {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
    });
    return () => {
      messageObserver.disconnect();
      console.log("message observer disconnected");
    };
  }, []);

  const handleButtonOnClick = () => {
    console.log("button clicked");
    setMessage(inputElementRef.current.value);
  };

  return (
    <div ref={containerElementRef}>
      <p ref={messageElementRef}>{message}</p>
      <input ref={inputElementRef} type="text" name="message" id="message" />
      <button onClick={handleButtonOnClick}>Change message</button>
    </div>
  );
};

export default MutationObserverComponent;

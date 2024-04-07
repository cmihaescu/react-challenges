import "./CustomHookChallenge.styles.css";
import { useRef, useState } from "react";
import { Banner } from "./Banner";

export const App = () => {
  const [bannerCount, setBannerCount] = useState(0);

  const createDivs = (bannerCount) => {
    let arrayCount = [];
    for (let i = 0; i < bannerCount; i++) {
      arrayCount.push(i);
    }
    return arrayCount.map((count) => <Banner />);
  };
  const handleReferenceDivClick = () => {
    setBannerCount(bannerCount + 1);
  };

  window.addEventListener("click", function (e) {
    if (!this.document.getElementById("reference-div").contains(e.target)) {
      handleReferenceDivClick();
    }
  });

  return (
    <div className="container">
      {createDivs(bannerCount)}
      <div></div>
      <div id="reference-div" className="ref-div">
        Reference div
      </div>
      <div></div>
    </div>
  );
};

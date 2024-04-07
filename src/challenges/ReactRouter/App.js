import { Routes, Route } from "react-router-dom";
import { Navigation } from "./navigation";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";
import Comp4 from "./comp4";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="comp1" element={<Comp1 />}></Route>
        <Route path="comp2" element={<Comp2 />}></Route>
        <Route path="comp3" element={<Comp3 />}></Route>
        <Route path="comp4" element={<Comp4 />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

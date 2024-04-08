import { Link, Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <div>
        <Link to="comp1">Comp1</Link>
        <Link to="comp2">Comp2</Link>
        <Link to="comp3">Comp3</Link>
        <Link to="comp4">Comp4</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

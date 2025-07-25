import Header from "./Header";
import { Outlet, Link } from "react-router";
const AppLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default AppLayout;

import Header from "./Header";
import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default AppLayout;

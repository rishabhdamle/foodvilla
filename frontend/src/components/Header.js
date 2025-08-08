import { useState } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
const Header = () => {
  let [isLogin, setIsLogin] = useState("Login");
  return (
    <div className="flex justify-between bg-orange-400 font-sans shadow-2xl">
      <div className="w-28 ml-18 mt-5 mb-5  ">
        <Logo></Logo>
      </div>
      <div>
        <ul className="flex mt-14  font-sans font-extrabold text-white mr-25">
          <li className="h-li pr-10 ">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="h-li pr-10">
            <Link to="/Aboutus" className="link">
              AboutUs
            </Link>
          </li>
          <li className="h-li pr-10">
            <Link to="/Contactus" className="link">
              Contactus
            </Link>
          </li>
          <li className="h-li pr-10">Cart</li>
          <li className="h-li pr-10">
            <Link to={"/Grocery"} className="link">
              Grocery
            </Link>
          </li>
          <li
            className="auth-btn"
            onClick={() => {
              {
                isLogin == "Login" ? setIsLogin("Logout") : setIsLogin("Login");
              }
              console.log(isLogin);
            }}
          >
            {isLogin}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

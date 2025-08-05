import { useState } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
const Header = () => {
  let [isLogin, setIsLogin] = useState("Login");
  return (
    <div className="hedaer">
      <div className="logo-container">
        <Logo></Logo>
      </div>
      <div className="nav-items">
        <ul className="h-u">
          <li className="h-li">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="h-li">
            <Link to="/Aboutus" className="link">
              AboutUs
            </Link>
          </li>
          <li className="h-li">
            <Link to="/Contactus" className="link">
              Contactus
            </Link>
          </li>
          <li className="h-li">Cart</li>
          <li className="h-li">
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

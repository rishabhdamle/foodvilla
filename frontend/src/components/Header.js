import { useState } from "react";
import Logo from "./Logo";
const Header = () => {
  let [isLogin, setIsLogin] = useState("Login");
  return (
    <div className="hedaer">
      <div className="logo-container">
        <Logo></Logo>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
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

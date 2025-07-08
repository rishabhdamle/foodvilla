import Logo from "./Logo";
export const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { LOGO_URL } from "../utils/constants";
export const Logo = () => {
  return (
    <div>
      <a className="logo">
        <img src={LOGO_URL}></img>
      </a>
    </div>
  );
};

export default Logo;

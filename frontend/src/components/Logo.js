import { LOGO_URL } from "../utils/config.js";
export const Logo = () => {
  return (
    <div>
      <a className="logo">
        <img src={LOGO_URL} className="rounded-t-full"></img>
      </a>
    </div>
  );
};

export default Logo;

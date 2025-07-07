import React from "react";
import ReactDOM from "react-dom/client";

/**
 *Header
 -Logo
 - NavItems
 *Body
 -Search
 -RestroContainer
    -img
    -name of res,star rating,cuiseine,Dilivery time
 *Footer
 -Copyright
 -Link
 -Address
 -Contact
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
const Logo = () => {
  return (
    <div>
      <a className="logo">
        <img src="https://bitbucket.org/namastedev/namaste-react-live/raw/287b3d3a32a5c90bacd113fb01878a86176b85e7/src/assets/img/foodvilla.png"></img>
      </a>
    </div>
  );
};

const Header = () => {
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
const RestroCard = ({ restroName, starRating, diliveryTime }) => {
  return (
    <div className="Restro-Card">
      <img
        className="img-hotel-mahi"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/6/0efb313d-0928-4134-afaf-c29527d1e4c4_8f1a3fa0-920b-417f-b994-87859ff98cf9.JPG"
      ></img>

      <h3>{restroName}</h3>
      <h4>{starRating}</h4>
      <h4>{diliveryTime}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <div className="Search">Search</div>
      <div className="Restro-Container">
        <RestroCard
          restroName="Swami Pure Veg"
          starRating="Star ratings 4.0"
          diliveryTime="Dilvery time 25-30 mins"
        ></RestroCard>
        <RestroCard
          restroName="McDonald's"
          starRating="4.5 (2.4K+ ratings)"
          diliveryTime="Dilvery time 30-35 mins"
        ></RestroCard>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="Footer-Layout">
      <div className="Copyright">
        <p>© {new Date().getFullYear()} Swaadaahaari. All rights reserved.</p>
      </div>
      <div className="Links">
        <div>
          <a href="/termsOfServices">Terms of services</a>
        </div>

        <div>
          <a href="/quickCommerceVersion">Get dilivery in 10 minutes</a>
        </div>

        <div>
          {" "}
          <a href="/quickCommerceVersion">Get dilivery in 10 minutes</a>
        </div>

        <div>
          <a href="/diliveryPartenrs">Become an dilviery partner</a>
        </div>

        <div>
          <a href="/parentalCompany">See aquisation</a>
        </div>
      </div>
      <div className="Adrress">
        Shivtej colony, Moshi, Pune, Postal-Code : 442106
      </div>
      <div className="Contact">Swaadaahaari@gmail.com, Ph.No:9873763245</div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};
root.render(<AppLayout></AppLayout>);
export default Logo;

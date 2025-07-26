import { CDN_URL } from "../utils/config.js";
import { Link } from "react-router";
const RestroCard = (props) => {
  const { resData } = props;

  return (
    <div className="Restro-Card">
      <Link to={"/restaurant/:" + resData.info.id}></Link>
      <img
        className="img-hotel-mahi"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      ></img>
      <li>{resData?.info?.name}</li>
      <li>Star rating - {resData?.info?.avgRating} ⭐</li>

      <li>Cuisine's - {resData?.info?.cuisines?.join(", ")}</li>
    </div>
  );
};

export default RestroCard;

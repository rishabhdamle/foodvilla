import { CDN_URL } from "../utils/constants.js";

const RestroCard = (props) => {
  const { resData } = props;

  return (
    <div className="Restro-Card">
      <img
        className="img-hotel-mahi"
        src={CDN_URL + resData.data.cloudinaryImageId}
      ></img>
      <li>{resData.data.name}</li>
      <li>Star rating - {resData.data.avgRating} ⭐</li>

      <li>Cuisine's - {resData.data.cuisines.join(", ")}</li>
    </div>
  );
};

export default RestroCard;

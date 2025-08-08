import { CDN_URL } from "../utils/config.js";
import { Link } from "react-router";
const RestroCard = (props) => {
  const { resData } = props;

  return (
    <div className="p-3 m-5 text-orange-950   font-bold rounded-2xl align-middle shadow-2xl w-[220px] h-[400px] cursor-pointer sm:flex flex-wrap, md:flex flex-wrap">
      <Link to={"/restaurant/:" + resData.info.id}></Link>
      <img
        className="w-[200] rounded-2xl mb-2"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      ></img>
      <li className="list-none text-md">{resData?.info?.name}</li>
      <li className="list-none text-md">
        Star rating - {resData?.info?.avgRating} ⭐
      </li>

      <li className="list-none text-md">
        Cuisine's - {resData?.info?.cuisines?.join(", ")}
      </li>
    </div>
  );
};

export default RestroCard;

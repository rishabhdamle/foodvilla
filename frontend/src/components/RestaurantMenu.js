import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
import useRestuarantData from "../utils/useRestuarantData";
function RestaurantMenu() {
  const { resId } = useParams();
  const restoData = useRestuarantData(resId);

  if (restoData == null) {
    return <ShimmerUI></ShimmerUI>;
  }

  const { name, city, costForTwoMessage, cuisines, avgRating } =
    restoData?.data?.cards[2]?.card?.card?.info;

  return (
    <>
      <div>
        {" "}
        <h1>Restaurant Name - {name}</h1>
        <h2>City - {city}</h2>
        <h3>Price - {costForTwoMessage}</h3>
        <h3>Cuisines -{cuisines.join(", ")}</h3>
        <h3>Ratings - {avgRating}</h3>
      </div>
    </>
  );
}

export default RestaurantMenu;

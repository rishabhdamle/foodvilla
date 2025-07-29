import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../utils/config";
import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
function RestaurantMenu() {
  const [restaurantData, setRestaurantData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  console.log("ResId : " + resId);
  async function fetchMenu() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantData(json);
  }
  if (restaurantData == null) {
    return <ShimmerUI></ShimmerUI>;
  }

  const { name, city, costForTwoMessage, cuisines, avgRating } =
    restaurantData?.data?.cards[2]?.card?.card?.info;

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

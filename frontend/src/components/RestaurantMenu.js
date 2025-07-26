import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../utils/config";
import { useParams } from "react-router";
function RestaurantMenu() {
  const [restaurantData, setRestaurantData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();
  console.log("ResId : " + resId);
  async function fetchData() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantData(json);
  }

  return (
    <>
      <h1>{restaurantData?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <h2>{restaurantData?.data?.cards[2]?.card?.card?.info?.city}</h2>
      <h3>
        {restaurantData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h3>
      <h3>
        {restaurantData?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
      </h3>
    </>
  );
}

export default RestaurantMenu;

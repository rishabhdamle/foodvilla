import RestroCard from "./RestroCard";
import WhatsOnYourMind from "./WhatsOnYourMind.js";
import Title from "./Title.js";
import restaurantList from "../utils/mock_data.js";
import { useEffect, useState } from "react";
import { swiggyUrl } from "../utils/config.js";
import RenderData from "./RenderData.js";
import { Loader } from "./Loader.js";
import ShimmerUI from "./ShimmerUI.js";
const Body = () => {
  let [restaurantList2, setRestaurantList2] = useState([]);
  let [headerImages, setHeaderImages] = useState([]);
  let [title, setTitle] = useState();
  let [isDataIsLoading, setIsDataIsLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsDataIsLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setIsDataIsLoading(false);
    setTitle(json?.data?.cards[0]?.card?.card?.header?.title);
    setHeaderImages(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );

    setRestaurantList2(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <div>
      {isDataIsLoading ? (
        <ShimmerUI></ShimmerUI>
      ) : (
        <RenderData
          title={title}
          headerImages={headerImages}
          restaurantList2={restaurantList2}
          setRestaurantList2={setRestaurantList2}
        ></RenderData>
      )}
    </div>
  );
};

export default Body;

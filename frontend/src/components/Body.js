import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import RenderData from "./RenderData.js";

import ShimmerUI from "./ShimmerUI.js";
const Body = () => {
  let [restaurantList2, setRestaurantList2] = useState([]);
  let [headerImages, setHeaderImages] = useState([]);
  let [title, setTitle] = useState();
  let [isDataIsLoading, setIsDataIsLoading] = useState(false);
  let [filteredListCopy, setFilteredListCopy] = useState([]);
  const onlineStatus = useOnlineStatus();
  console.log("Body rendred");
  useEffect(() => {
    console.log("useEffect called");
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
    setFilteredListCopy(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (onlineStatus == false) {
    return <h1>The network connection has been lost.</h1>;
  }
  return (
    <div className="bg-orange-50 text-orange-950">
      {isDataIsLoading ? (
        <ShimmerUI></ShimmerUI>
      ) : (
        <RenderData
          title={title}
          headerImages={headerImages}
          restaurantList2={restaurantList2}
          setRestaurantList2={setRestaurantList2}
          filteredListCopy={filteredListCopy}
          setFilteredListCopy={setFilteredListCopy}
        ></RenderData>
      )}
    </div>
  );
};

export default Body;

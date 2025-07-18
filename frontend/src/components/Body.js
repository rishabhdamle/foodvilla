import RestroCard from "./RestroCard";
import WhatsOnYourMind from "./WhatsOnYourMind.js";
import Title from "./Title.js";
import restaurantList from "../utils/mock_data.js";
import { useEffect, useState } from "react";
import { swiggyUrl } from "../utils/config.js";
import RenderData from "./RenderData.js";
import { Loader } from "./Loader.js";

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
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.6833028&lng=73.8510597&carousel=true&third_party_vendor=1"
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
        <Loader></Loader>
      ) : (
        <RenderData
          title={title}
          headerImages={headerImages}
          restaurantList2={restaurantList2}
        ></RenderData>
      )}
    </div>
  );
};

export default Body;

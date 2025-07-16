import RestroCard from "./RestroCard";
import WhatsOnYourMind from "./WhatsOnYourMind.js";
import Title from "./Title.js";
import restaurantList from "../utils/mock_data.js";
import { useEffect, useState } from "react";
const Body = () => {
  let [restaurantList2, setRestaurantList2] = useState([]);
  let [headerImages, setHeaderImages] = useState([]);
  let [title, setTitle] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.6833028&lng=73.8510597&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
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
      <div>
        <Title title={title}></Title>
      </div>
      <div className="headerImagesContainer">
        {headerImages.map((img) => (
          <WhatsOnYourMind key={img?.id} imgData={img} />
        ))}
      </div>
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredList = restaurantList2.filter((restro) => {
              if (restro.info.avgRating > 4) {
                return true;
              } else {
                return false;
              }
            });
            setRestaurantList2(filteredList);
          }}
        >
          See top reated restaurants by clicking here ⭐
        </button>
      </div>
      <div className="Restro-Container">
        {restaurantList2.map((restro) => (
          <RestroCard key={restro?.info?.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;

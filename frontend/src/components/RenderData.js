import Title from "./Title";
import WhatsOnYourMind from "./WhatsOnYourMind";
import RestroCard from "./RestroCard";
import WhatsOnYourMind from "./WhatsOnYourMind.js";
import restaurantList from "../utils/mock_data.js";
import { useState } from "react";

function RenderData(props) {
  const { title, headerImages, restaurantList2, setRestaurantList2 } = props;
  const [input, setInput] = useState("");
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
      <div className="parent-filter-search">
        <div className="filter-btn">
          <button
            onClick={() => {
              const filteredList = restaurantList2.filter((restro) => {
                if (restro.info.avgRating > 4.5) {
                  return true;
                } else {
                  return false;
                }
              });
              setRestaurantList2(filteredList);
              console.log(filteredList);
            }}
          >
            See top reated restaurants by clicking here ⭐
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="What do you want ? search here 🔍"
            className="input-search"
            value={input.toLocaleLowerCase()}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          {console.log(input)}
          <button
            className="search-btn"
            onClick={() => {
              let filteredList = restaurantList2.filter((res) => {
                if (res?.info?.name.toLowerCase().includes(input)) {
                  return true;
                }
              });
              setRestaurantList2(filteredList);
              console.log(restaurantList2);
            }}
          >
            Click
          </button>
        </div>
      </div>

      <div className="Restro-Container">
        {restaurantList2.map((restro) => (
          <RestroCard key={restro?.info?.id} resData={restro} />
        ))}
      </div>
    </div>
  );
}

export default RenderData;

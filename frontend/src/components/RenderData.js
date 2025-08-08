import Title from "./Title";
import WhatsOnYourMind from "./WhatsOnYourMind";
import RestroCard from "./RestroCard";
import WhatsOnYourMind from "./WhatsOnYourMind.js";
import restaurantList from "../utils/mock_data.js";
import { useState } from "react";

function RenderData(props) {
  const {
    title,
    headerImages,
    restaurantList2,
    setRestaurantList2,
    filteredListCopy,
    setFilteredListCopy,
  } = props;
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <Title title={title}></Title>
      </div>
      <div className="flex flex-wrap mt-5 ml-10">
        {headerImages.map((img) => (
          <WhatsOnYourMind key={img?.id} imgData={img} />
        ))}
      </div>
      <div className="flex mt-15 ml-15 mb-15">
        <div className="mr-30">
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
            className="text-md font-bold bg-orange-400 text-white rounded-xl py-2 px-2 cursor-pointer shadow-2xl"
          >
            See top reated restaurants by clicking here ⭐
          </button>
        </div>
        <div className="flex">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="What do you want ? search here"
            className="focus:outline-none text-orange-950 border border-orange-950 rounded-xl mr-3 font-bold text-md px-5"
            value={input.toLocaleLowerCase()}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          {console.log(input)}
          <button
            className="text-md font-bold bg-orange-400 text-white rounded-xl py-2 px-4 cursor-pointer shadow-2xl"
            onClick={() => {
              let filteredList = restaurantList2.filter((res) => {
                if (res?.info?.name.toLowerCase().includes(input)) {
                  return true;
                }
              });

              setFilteredListCopy(filteredList);
            }}
          >
            Click
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredListCopy.map((restro) => (
          <RestroCard key={restro?.info?.id} resData={restro} />
        ))}
      </div>
    </div>
  );
}

export default RenderData;

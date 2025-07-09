import RestroCard from "./RestroCard";
import restaurantList from "../utils/mock_data.js";
import { useState } from "react";
const Body = () => {
  let [restaurantList2, setRestroList2] = useState([...restaurantList]);
  return (
    <div>
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredList = restaurantList2.filter((restro) => {
              if (restro.data.avgRating > 4) {
                return true;
              } else {
                return false;
              }
            });
            setRestroList2(filteredList);
          }}
        >
          See top reated restaurants by clicking here ⭐
        </button>
      </div>
      <div className="Restro-Container">
        {restaurantList2.map((restro) => (
          <RestroCard resData={restro} key={restro.data.id}></RestroCard>
        ))}
      </div>
    </div>
  );
};

export default Body;

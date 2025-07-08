import RestroCard from "./RestroCard";
import restaurantList from "../utils/mock_data.js";
const Body = () => {
  return (
    <div>
      <div className="Search">Search</div>
      <div className="Restro-Container">
        {restaurantList.map((restro) => (
          <RestroCard resData={restro} key={restro.data.id}></RestroCard>
        ))}
      </div>
    </div>
  );
};

export default Body;

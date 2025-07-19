import Title from "./Title";
import WhatsOnYourMind from "./WhatsOnYourMind";
import RestroCard from "./RestroCard";
import WhatsOnYourMind from "./WhatsOnYourMind.js";
import restaurantList from "../utils/mock_data.js";

function RenderData(props) {
  const { title, headerImages, restaurantList2, setRestaurantList2 } = props;
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
}

export default RenderData;

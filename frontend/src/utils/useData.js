import { useEffect, useState } from "react";
const useData = (url) => {
  let [headerImages, setHeaderImages] = useState([]);
  let [title, setTitle] = useState();
  let [isDataIsLoading, setIsDataIsLoading] = useState(false);
  let [filteredListCopy, setFilteredListCopy] = useState([]);
  let [restaurantList2, setRestaurantList2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsDataIsLoading(true);
    const data = await fetch(url);

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

  return [
    headerImages,
    title,
    isDataIsLoading,
    filteredListCopy,
    restaurantList2,
    setRestaurantList2,
    setFilteredListCopy,
  ];
};

export default useData;

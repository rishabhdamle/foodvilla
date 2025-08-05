import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../utils/config";
const useRestuarantData = (resId) => {
  const [restoData, setRestoData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestoData(json);
  }
  return restoData;
};

export default useRestuarantData;

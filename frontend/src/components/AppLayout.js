import Header from "./Header";
import Body from "./Body";
import restaurantList from "../utils/mock_data";
const AppLayout = () => {
  return (
    <div>
      <Header></Header>
      <Body resData={restaurantList}></Body>
    </div>
  );
};

export default AppLayout;

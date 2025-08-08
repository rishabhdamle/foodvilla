import { IMG_CDN_URL } from "../utils/config";

function WhatsOnYourMind(props) {
  return (
    <div className="flex flex-wrap p-3 ">
      <img
        src={IMG_CDN_URL + props?.imgData?.imageId}
        alt="W-T-M"
        className="w-25 rounded-2xl shadow-2xl cursor-grab"
      ></img>
    </div>
  );
}

export default WhatsOnYourMind;

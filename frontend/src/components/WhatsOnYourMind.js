import { IMG_CDN_URL } from "../utils/config";

function WhatsOnYourMind(props) {
  console.log(props);
  console.log(IMG_CDN_URL + props?.imgData?.imageId);

  return (
    <div className="mind-card">
      <img src={IMG_CDN_URL + props?.imgData?.imageId} alt="W-T-M"></img>
    </div>
  );
}

export default WhatsOnYourMind;

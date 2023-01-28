import { FC } from "react";
import { Mountain } from "../../services/notionApi";
import MountainStatus from "./MountainStatus";
import "../../assets/styles/mountains.css";

interface Props {
  mountain: Mountain;
}

const MountainCard: FC<Props> = ({
  mountain: { name, altitude, country_name, place_name, done_at, image_url },
}) => {
  return (
    <div className="mountain-item">
      <img alt={name} src={image_url} className="mountain-img"></img>
      <h2>
        {name} <span className="mountain-altitude">{`(${altitude}m)`}</span>
      </h2>
      <p>{`${country_name} - ${place_name}`}</p>
      <MountainStatus done_at={done_at} />
    </div>
  );
};

export default MountainCard;

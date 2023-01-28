import { FC } from "react";
import "../../assets/styles/mountains.css";
import Icon from "../utils/Icon";

interface Props {
  done_at: Date
}

const MountainStatus : FC<Props> = ({ done_at }) => {
  if(!done_at){
    return (
      <div className="center-container">
        <Icon icon="radio_button_unchecked" className="yellow-icon" />
        <span className="status">Pendiente</span>
      </div>
    )
  }

  return (
    <div className="center-container">
      <Icon icon="check_circle" className="green-icon" />
      <span className="status">{`Realizado el ${new Date(done_at).toLocaleDateString()}`}</span>
    </div>
  )
}

export default MountainStatus;

import MountainList from "../components/mountains/MountainList";
import Header from "../components/shared/Header";
import "../assets/styles/mountains.css";
import { FC } from "react";

const MountainsScreen : FC = () => {
  return (
    <div className="container">
      <Header />
      <MountainList />
    </div>
  );
}

export default MountainsScreen;

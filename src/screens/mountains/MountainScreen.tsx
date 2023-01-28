import Header from "../../components/shared/Header";
import "../../assets/styles/mountains.css";
import { FC } from "react";
import { useParams } from 'react-router-dom';

const MountainScreen : FC = () => {
  const { mountainId } = useParams();
  
  return (
    <div className="container">
      <Header />
      <h1>mountainId: {mountainId}</h1>
    </div>
  );
}

export default MountainScreen;

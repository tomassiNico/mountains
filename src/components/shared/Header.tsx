import { FC } from "react";
import '../../assets/styles/index.css';

const Header : FC = () => {
  return (
    <div className="header">
      <img className="header-img-logo"alt="img-logo" src="/mountain.png"/>
      <a href="/" className="logo">Mountains</a>
    </div>
  )
}

export default Header;

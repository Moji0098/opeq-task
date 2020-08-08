import React from "react";

//images & icons
import logo from "../assets/imgs/logo.svg";
import { ShoppingBasket } from "@material-ui/icons";

const Header = ({
  headerbox = "header-box",
  menulogin = "menu-login",
  menusignup = "menu-signup",
  menuicon = "menu-icon",
}) => {
  return (
    <div className={headerbox}>
      <div className="header container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="menu">
          <li className="menu-item">Reservation</li>
          <li className="menu-item">Orders</li>
          <li className="menu-item">Locations</li>
          <li className={menulogin}>Log In</li>
          <li className={menusignup}>Sign Up</li>
          <li className="menu-item-icon">
            <ShoppingBasket className={menuicon} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };

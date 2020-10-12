import React from "react";
import { Link } from "react-router-dom";

//Material UI
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";

//Styles
import "./Header.scss";
import Logo from "../../assets/img/fluid-tracker-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            <img src={Logo} alt="Project Tracker" />
          </a>
        </div>
        <div className="header__navigation">
          <Button>
            <ExitToAppIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;

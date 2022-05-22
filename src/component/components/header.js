import React from "react";
import logo from "../Assets/WEB-LOGO.png";

const Header = () => {
  const url = "https://nedjamiat.org/";
  return (
    <div className="Header">
      <Logo url={url} />
      <Heading />
    </div>
  );
};

export default Header;

const Logo = (props) => {
  return (
    <div className="App-logo">
      <a href={props.url}>
        <img
          src={logo}
          alt=""
          className="logo"
          onClick={() => {
            console.log("ss");
          }}
        />
      </a>
    </div>
  );
};

const Heading = () => {
  return (
    <div className="Heading-container">
      <h1 className="heading">
        <span className="headingE">E</span>-Library
      </h1>
    </div>
  );
};

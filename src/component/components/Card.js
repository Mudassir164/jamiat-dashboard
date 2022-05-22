import React from "react";

import logo from "../Assets/WEB-LOGO.png";

const CardBook = ({ BookDetails }) => {
  const url = "https://nedjamiat.org/";
  return (
    <>
      <section className="main-card--cointainer">
        <div className="cardContainer">
          <img src={logo} alt="" />
          <h3>hello world</h3>
        </div>
      </section>
    </>
  );
};

export default CardBook;

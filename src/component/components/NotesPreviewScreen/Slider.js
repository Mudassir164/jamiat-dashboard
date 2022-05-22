import React from "react";

const Slider = (props) => {
  return (
    <div
      className="jumbotron feature"
      style={{
        backgroundImage: `url(${props.ImgUrl})`,
      }}
    >
      <div className="container-slider">
        <h1>{props.SliderTitle}</h1>
      </div>
    </div>
  );
};

export default Slider;

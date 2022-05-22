import React from "react";
import { useLocation } from "react-router-dom";
import NotesContainer from "../../components/Notes Screen/NotesContainer";
import Slider from "../../components/NotesPreviewScreen/Slider";
import "./NotesScreen.css";

const NotesScreen = () => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <>
      <Slider
        SliderTitle="Notes and Past Paper"
        ImgUrl="https://nedjamiat.org/wp-content/uploads/2021/05/11111111111111111111111111111111-1024x294.jpg"
      />
      <NotesContainer />
    </>
  );
};

export default NotesScreen;

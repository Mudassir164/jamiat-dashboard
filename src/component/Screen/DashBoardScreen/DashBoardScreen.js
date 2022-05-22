import React, { useState } from "react";

import Header from "../../components/DashBoardScreen/Header";
import "./DashBoardScreen.css";
import DashBoardContainer from "../../components/DashBoardScreen/DashBoardContainer";

import ModalWindow from "../../components/DashBoardScreen/ModalWindow";
import { Link } from "react-router-dom";

const DashBoardScreen = () => {
  const [activeState, setActiveState] = useState("Notes");
  const [show, setShow] = useState(false);
  const [EditData, setEditData] = useState();
  const [actionEditOrAdd, setActionEditOrAdd] = useState("");

  const handleClose = () => setShow(false);

  return (
    <div className="DasBoard-Main-Container">
      <Header />
      <DashBoardContainer
        setShow={setShow}
        activeState={activeState}
        setActiveState={setActiveState}
        setEditData={setEditData}
        setActionEditOrAdd={setActionEditOrAdd}
      />
      <div>
        <Link
          className="link link-two shrink-on-hover"
          to="MainScreen"
          // state={{ from: "notes and pastpaer" }}
        >
          click me
        </Link>
      </div>
      <ModalWindow
        show={show}
        handleClose={handleClose}
        activeState={activeState}
        data={EditData}
        actionEditOrAdd={actionEditOrAdd}
      />
    </div>
  );
};

export default DashBoardScreen;

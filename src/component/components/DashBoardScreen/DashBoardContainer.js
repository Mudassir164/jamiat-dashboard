// import { Button } from "bootstrap";
import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { FaBook, FaPaperclip, FaStickyNote } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RecordShowContainer from "./RecordShowContainer";
import ModalWindow from "./ModalWindow";

function DashBoardContainer({
  setShow,
  activeState,
  setActiveState,
  setEditData,
  setActionEditOrAdd,
}) {
  // const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  return (
    <div className="dash-board-main-container">
      <div className="side-bar-Menu">
        <CustomButton
          icon={<FaStickyNote className="Cicon" />}
          iconName="Notes"
          onClick={() => {
            setActiveState("Notes");
          }}
          activeState={activeState}
        />
        <CustomButton
          icon={<FaPaperclip className="Cicon" />}
          iconName="Past Paper"
          onClick={() => {
            setActiveState("Past Paper");
          }}
          activeState={activeState}
        />
        <CustomButton
          icon={<FaBook className="Cicon" />}
          iconName="Books"
          onClick={() => {
            setActiveState("Books");
          }}
          activeState={activeState}
        />
      </div>
      <div className="RecordContainer">
        <div className="Button-container">
          <CustomButton
            icon={<FaStickyNote className="Cicon" />}
            iconName={`Add New ${activeState}`}
            onClick={() => {
              handleShow(true);
              setActionEditOrAdd("Add");
            }}
            activeState={activeState}
            extrastyle={{ background: "orange", color: "white", padding: 10 }}
          />
        </div>
        <RecordShowContainer
          headerTitle={activeState}
          handleShow={handleShow}
          setEditData={setEditData}
          setActionEditOrAdd={setActionEditOrAdd}
        />
      </div>
    </div>
  );
}

export default DashBoardContainer;
const styles = {
  recordshowcontianer: {
    backgroundColor: "red",
    padding: 10,
  },
};

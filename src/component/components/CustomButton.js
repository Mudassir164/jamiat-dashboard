import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomButton({ icon, iconName, onClick, activeState, extrastyle }) {
  return (
    <button
      className="buttonNotes"
      onClick={onClick}
      style={{
        color: activeState === iconName ? "orange" : "black",
        ...extrastyle,
      }}
    >
      {icon}

      {iconName}
    </button>
  );
}

export default CustomButton;

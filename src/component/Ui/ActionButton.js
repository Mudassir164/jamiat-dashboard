import React from "react";

function ActionButton({ onClick, Icon }) {
  return (
    <button className="EditAndDeleteButton" onClick={onClick}>
      {Icon}
    </button>
  );
}

export default ActionButton;

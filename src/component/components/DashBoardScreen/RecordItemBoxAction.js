import React from "react";
import ActionButton from "../../Ui/ActionButton";
import { FaTrash, FaPen } from "react-icons/fa";

const RecordItemBoxAction = ({ title, onEdit, onDelete }) => {
  return (
    <div className="recordItemboxChild">
      <h6>{title}</h6>

      <div className="deleteEditContainer">
        <ActionButton
          onClick={onEdit}
          Icon={<FaPen className="ActionIcon" />}
        />
        <ActionButton
          onClick={onDelete}
          Icon={<FaTrash className="ActionIcon" />}
        />
      </div>
    </div>
  );
};

export default RecordItemBoxAction;

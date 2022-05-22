import React from "react";

const RecordItemBox = ({ title, name, isUrl }) => {
  return (
    <div className="recordItemboxChild">
      <h6>{title}</h6>
      {isUrl ? (
        <a href={name} target="_blank" rel="noopener noreferrer">
          {`${name.substring(0, 20)}...`}
        </a>
      ) : (
        <p>{name}</p>
      )}
    </div>
  );
};

export default RecordItemBox;

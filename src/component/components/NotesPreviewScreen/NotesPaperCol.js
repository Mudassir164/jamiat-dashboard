import React from "react";

const NotesPaperCol = ({ title, data }) => {
  return (
    <div className="note-paper-col">
      <h5>{title}</h5>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <a href={item.Url} target="_blank">
              {title === "Notes" ? item.CourseName : item.PDFName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPaperCol;

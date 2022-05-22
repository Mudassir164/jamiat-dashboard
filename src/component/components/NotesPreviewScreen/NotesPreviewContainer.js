import React from "react";
import NotesPaperCol from "./NotesPaperCol";

const NotesPreviewContainer = ({
  semesterHeading,
  semester1,
  semester2,
  pastPaper1,
  pastPaper2,
}) => {
  return (
    <div className="note-paper-container">
      <div className="note-paper-row">
        <h3 className="semester-heading">{semesterHeading[0].semester[0]}</h3>
        <NotesPaperCol title="Notes" data={semester1} />
        <NotesPaperCol title="Past Paper" data={pastPaper1} />
      </div>
      <div className="note-paper-row">
        <h3 className="semester-heading">{semesterHeading[0].semester[1]}</h3>
        <NotesPaperCol title="Notes" data={semester2} />
        <NotesPaperCol title="Past Paper" data={pastPaper2} />
      </div>
    </div>
  );
};

export default NotesPreviewContainer;

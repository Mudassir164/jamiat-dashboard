import React from "react";
import RecordItemBox from "./RecordItemBox";
import RecordItemBoxAction from "./RecordItemBoxAction";
import { DeleteRecord } from "../../dataBase/db";
import { Alert } from "bootstrap";
import Book from "../../Modals/book";
import Notes from "../../Modals/Notes";
import PastPaper from "../../Modals/PastPaper";

function RecordItem({
  data,
  action,
  handleShow,
  setEditData,
  id,
  setActionEditOrAdd,
}) {
  const onEditHandler = () => {
    setActionEditOrAdd("edit");
    if (action === "Notes") {
      setEditData({
        ...new Notes(
          data.CourseName,
          data.Url,
          data.Department,
          data.Semester,
          data.Year
        ),
        id: id,
      });
    }
    if (action === "Past Paper") {
      setEditData({
        ...new Notes(
          data.PDFName,
          data.Url,
          data.Department,
          data.Semester,
          data.Year
        ),
        id: id,
      });
    }
    if (action === "Books") {
      setEditData({
        ...new Notes(data.BookName, data.Url),
        id: id,
      });
    }

    handleShow();
  };

  const onDeleteHandler = () => {
    const deleteConfirm = async () => {
      window.location.reload();
      await DeleteRecord(data.id, action);
    };
    window.confirm("Are you sure you wish to delete this item?")
      ? deleteConfirm()
      : console.log("cancel");
  };
  return (
    <div className="recordItem" key={id}>
      {(action === "Notes" || action === "Past Paper") && (
        <>
          <RecordItemBox title="Department" name={data.Department} />
          <RecordItemBox title="Year" name={data.Year} />
          <RecordItemBox title="Semester" name={data.Semester} />
          <RecordItemBox
            title={action === "Notes" ? "Course Name" : "Paper "}
            name={action === "Notes" ? data.CourseName : data.PDFName}
          />
        </>
      )}

      {action === "Books" && (
        <RecordItemBox title="Book Name" name={data.BookName} />
      )}
      <RecordItemBox title="Url" name={data.Url} isUrl={true} />

      <RecordItemBoxAction
        title="Action"
        onDelete={onDeleteHandler}
        onEdit={onEditHandler}
      />
    </div>
  );
}

export default RecordItem;

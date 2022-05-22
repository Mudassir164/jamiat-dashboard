import React, { useState, useEffect } from "react";
import RecordItem from "./RecordItem";
import {
  DummyData,
  DummyDataForPastPaper,
  DummyDataForBook,
} from "../../Assets/dummyData";
import { FetchExpenses } from "../../dataBase/db";

function RecordShowContainer({
  headerTitle,
  handleShow,
  setEditData,
  setActionEditOrAdd,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(DummyData);

  useEffect(() => {
    async function getExpenses() {
      const expense = await FetchExpenses(headerTitle);
      setIsLoading(true);
      setData(expense);
      setIsLoading(false);
    }

    getExpenses();
    // console.log(data[0].id);
  }, [FetchExpenses, setData, headerTitle, setIsLoading]);

  useEffect(() => {
    if (headerTitle === "Notes") {
      // for notes
      setData(DummyData);
    }
    if (headerTitle === "Past Paper") {
      // for notes
      setData(DummyDataForPastPaper);
    }
    if (headerTitle === "Books") {
      // for notes
      setData(DummyDataForBook);
    }
  }, [headerTitle, setData]);

  return (
    <div className="record-show-contianer">
      <div className="RecordHeaderTitle">
        <h1>{headerTitle} Record</h1>
      </div>
      {isLoading ? (
        <h6>Loading.......</h6>
      ) : (
        <div className="recordContainer">
          {data.map((item) => {
            return (
              <RecordItem
                data={item}
                action={headerTitle}
                id={item.id}
                handleShow={handleShow}
                setEditData={setEditData}
                setActionEditOrAdd={setActionEditOrAdd}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default RecordShowContainer;

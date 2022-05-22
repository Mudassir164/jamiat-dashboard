// import { Select } from "@mui/material";
import React, { useState } from "react";
import { dummyDataForNotesAndBook } from "../../Assets/dummyData";
import Book from "../../Modals/book";
import Notes from "../../Modals/Notes";
import { StoreData } from "../../dataBase/db";
import PastPaper from "../../Modals/PastPaper";

const Form = ({ activeState, handleClose, editData, actionEditOrAdd }) => {
  const YearData = ["First Year", "Second Year", "Third Year", "Fourth Year"];

  const SemesterData = [
    "First Semester",
    "Second Semester",
    "Third Semester",
    "Fourth Semester",
    "Fifth Semester",
    "Sixth Semester",
    "Seventh Semester",
    "Last Semester",
  ];
  const departmentName = [];
  dummyDataForNotesAndBook.forEach((item) => {
    departmentName.push(item.name);
  });

  const [Department, setDepartment] = useState(
    actionEditOrAdd === "edit" ? editData.Department : departmentName[0]
  );
  const [Semester, setSemester] = useState(
    actionEditOrAdd === "edit" ? editData.Semester : SemesterData[0]
  );
  const [Year, setYear] = useState(
    actionEditOrAdd === "edit" ? editData.Year : YearData[0]
  );
  const [Name, setName] = useState(
    actionEditOrAdd === "edit" ? editData.name : ""
  );
  const [Url, setUrl] = useState(
    actionEditOrAdd === "edit" ? editData.Url : ""
  );

  const onSubmitHandler = () => {
    if (activeState === "Notes") {
      const data = new Notes(Name, Url, Department, Semester, Year);
      StoreData(data, activeState);
    }

    if (activeState === "Books") {
      const data = new Book(Name, Url);
      console.log(data);
      StoreData(data, activeState);
    }

    if (activeState === "Past Paper") {
      const data = new PastPaper(Name, Url, Department, Semester, Year);
      StoreData(data, activeState);
      console.log(data);
    }
    handleClose();
  };

  return (
    <div className="FormContanier">
      {activeState === "Notes" || activeState === "Past Paper" ? (
        <div className="SelectInputContainer">
          <SelectInput
            options={departmentName}
            value={Department}
            setValue={setDepartment}
            title=" Select Department"
          />
          <SelectInput
            options={YearData}
            value={Year}
            setValue={setYear}
            title="Select Year"
          />
          <SelectInput
            options={SemesterData}
            value={Semester}
            setValue={setSemester}
            title="Select Semester"
          />
        </div>
      ) : (
        ""
      )}
      <div className="SelectInputContainer">
        <NameAndUrlInput
          value={Name}
          setValue={setName}
          title={`${activeState} Name`}
        />
        <NameAndUrlInput value={Url} setValue={setUrl} title="URL" />
      </div>
      <button className="submitButton" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
};

const SelectInput = ({ options, value, setValue, title }) => {
  return (
    <div className="SelectContainer">
      <h6>{title}</h6>
      <select
        className="select"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          console.log(e.target.value);
        }}
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const NameAndUrlInput = ({ title, value, setValue }) => {
  return (
    <div className="SelectContainer">
      <h6>{title}</h6>
      <input
        className="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from "react";
import Slider from "../../components/NotesPreviewScreen/Slider";
import { useLocation } from "react-router-dom";

import { dummyDataForNotesAndBook } from "../../Assets/dummyData";
import { FetchExpenses } from "../../dataBase/db";

import "./NotesPreviewScreen.css";
import NotesPreviewContainer from "../../components/NotesPreviewScreen/NotesPreviewContainer";

const NotesPreviewScreen = () => {
  const dummyDataForButton = [
    {
      semester: ["First Semester", "Second Semester"],
      year: "First Year",
    },
    {
      semester: ["Third Semester", "Fourth Semester"],
      year: "Second Year",
    },
    {
      semester: ["Fifth Semester", "Sixth Semester"],
      year: "Third Year",
    },
    {
      semester: ["Seventh Semester", "Last Semester"],
      year: "Final Year",
    },
  ];

  const [Semester, setSemester] = useState(dummyDataForButton[0].semester);
  const [Year, setYear] = useState(dummyDataForButton[0].year);
  const location = useLocation();
  const { title, title2 } = location.state;

  const [dataforNotes, setDataforNotes] = useState([]);
  const [dataforPastPaper, setDataforPastPaper] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const Notes = await FetchExpenses("Notes");
      const PastPaper = await FetchExpenses("Past Paper");
      setDataforPastPaper(PastPaper);
      setDataforNotes(Notes);
    }
    getExpenses();
  }, [FetchExpenses, setDataforNotes, setDataforPastPaper]);

  const DepartmentDetailForNotes = dataforNotes.filter(
    (item) => item.Department === title2
  );
  const DepartmentDetailForPastPaper = dataforPastPaper.filter(
    (item) => item.Department === title2
  );

  const FilterByNotesInYear = DepartmentDetailForNotes.filter(
    (item) => item.Year === Year
  );
  const FilterByPastPaperInYear = DepartmentDetailForPastPaper.filter(
    (item) => item.Year === Year
  );

  const FilterBySemesterHeading = dummyDataForButton.filter(
    (item) => item.year === Year
  );

  const FilterBySemester1 = FilterByNotesInYear.filter(
    (item) => item.Semester === FilterBySemesterHeading[0].semester[0]
  );
  const FilterBySemesterForPastPaper1 = FilterByPastPaperInYear.filter(
    (item) => item.Semester === FilterBySemesterHeading[0].semester[0]
  );

  const FilterBySemester2 = FilterByNotesInYear.filter(
    (item) => item.Semester === FilterBySemesterHeading[0].semester[1]
  );

  const FilterBySemesterForPastPaper2 = FilterByPastPaperInYear.filter(
    (item) => item.Semester === FilterBySemesterHeading[0].semester[1]
  );

  // console.log(FilterBySemester1[0]);

  return (
    <>
      <Slider
        SliderTitle={title}
        ImgUrl="https://nedjamiat.org/wp-content/uploads/2021/05/11111111111111111111111111111111-1024x294.jpg"
      />
      <div className="ButtonYearContainer">
        {dummyDataForButton.map((data, index) => {
          return (
            <button
              className="ButtonYear"
              onClick={() => {
                setSemester(data.semester);
                setYear(data.year);
              }}
              key={index}
            >
              {data.year}
            </button>
          );
        })}
      </div>

      {/* sdlkjffff */}
      <section className="NotesPastPaperSection">
        <div className="YearHeadingContainer">
          <h1>{Year}</h1>
        </div>

        <NotesPreviewContainer
          semesterHeading={FilterBySemesterHeading}
          semester1={FilterBySemester1}
          semester2={FilterBySemester2}
          pastPaper1={FilterBySemesterForPastPaper1}
          pastPaper2={FilterBySemesterForPastPaper2}
        />
      </section>
    </>
  );
};

export default NotesPreviewScreen;

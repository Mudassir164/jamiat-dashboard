import React from "react";
import { Link } from "react-router-dom";

import { dummyDataForNotesAndBook } from "../../Assets/dummyData";

const NotesContainer = () => {
  return (
    <>
      <section className="main-card--cointainer">
        {dummyDataForNotesAndBook.map((item, index) => {
          return (
            <Link
              state={{ title: item.fullName, title2: item.name }}
              to={`/NotesPreviewScreen/`}
              key={index}
              className="link-style"
            >
              <div className="cardContainer">
                <img src={item.thumbnail} alt="" className="CardImg" />
                <div className="DepartName">
                  <h6>{item.name}</h6>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default NotesContainer;

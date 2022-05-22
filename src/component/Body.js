import React from "react";
import CardBook from "./Card";
import { BookDetails } from "./BookDetail";

const Body = () => {
  return (
    <div className="BodyContainer">
      <CardBook BookDetails={BookDetails} />
    </div>
  );
};

export default Body;

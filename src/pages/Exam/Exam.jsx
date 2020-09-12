import React from "react";
import { ExamWrapper } from "./Components";
import "./Exam.css";

function Exam({ match }) {
  return (
    <div id="exam">
      <ExamWrapper id={match.params.id} />
      <div className="bg"></div>
    </div>
  );
}

export default Exam;

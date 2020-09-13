import React from "react";
import { ExamWrapper } from "./Components";
import "./Exam.css";

function Exam({ history, match }) {
  return (
    <div id="exam">
      <ExamWrapper id={match.params.id} push={history.push} />
      <div className="bg"></div>
    </div>
  );
}

export default Exam;

import React from "react";
import { useState } from "react";
import { ExamWrapper, ExamSite } from "./Components";
import "./Exam.css";

function Exam({ history, match }) {
  const [taking, setTaking] = useState(false);
  return (
    <div id="exam">
      {taking ? <></> : <ExamWrapper id={match.params.id} push={history.push} setTaking={setTaking} />}
      {taking ? <ExamSite /> : <></>}
      <div className="bg"></div>
    </div>
  );
}

export default Exam;

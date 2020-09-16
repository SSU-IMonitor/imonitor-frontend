import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ExamWrapper, ExamSite, ExamResult } from "./Components";
import axios from "axios";
import "./Exam.css";

function Exam({ history, match, modalState }) {
  const [examData, setExamData] = useState({});
  const [taking, setTaking] = useState(false);

  useEffect(() => {
    const tokenType = JSON.parse(localStorage.getItem("TokenType"));
    const accessToken = JSON.parse(localStorage.getItem("AccessToken"));
    const header = {
      headers: {
        Authorization: tokenType + " " + accessToken,
      },
    };
    axios.get(`/exams/${match.params.id}`, header).then(res => {
      setExamData(res.data.exam);
    });
  }, []);

  return (
    <div id="exam">
      {taking ? <></> : <ExamWrapper push={history.push} setTaking={setTaking} examData={examData} />}
      {taking ? <ExamSite examData={examData} /> : <></>}
      <ExamResult isOpen={modalState.modal} examData={examData} />
      <div className="bg"></div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    modalState: state,
  };
}

export default connect(mapStateToProps)(Exam);

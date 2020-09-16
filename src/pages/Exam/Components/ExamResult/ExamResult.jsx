import React from "react";
import { closeModal } from "actions";
import { connect } from "react-redux";
import "./ExamResult.css";

function ExamResult({ isOpen, close, examData }) {
  const answer = localStorage.getItem("answer") ? JSON.parse(localStorage.getItem("answer")) : [];
  console.log(examData);

  const submitExam = () => {
    alert("제출이 완료되었습니다.")
    localStorage.removeItem("answer");
    window.location.href = `/exam/${examData.id}`;
  };
  return (
    <>
      <div id="exam-result-layer" style={isOpen ? { display: "block" } : { display: "none" }} onClick={close}></div>
      <div id="exam-result" style={isOpen ? { display: "block" } : { display: "none" }}>
        <ul className="answer-list">
          {examData.questions?.map((p, index) => (
            <li key={p.id}>
              <p>Problem{index + 1}</p>
              <p>{answer[index]}</p>
            </li>
          ))}
        </ul>
        <button onClick={submitExam}>제출</button>
      </div>
    </>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    close: () => {
      dispatch(closeModal());
    },
  };
}

export default connect(null, mapDispatchToProps)(ExamResult);

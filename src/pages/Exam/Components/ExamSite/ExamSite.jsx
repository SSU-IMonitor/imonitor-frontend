import React from "react";
import { useState, createRef } from "react";
import "./ExamSite.css";

function ExamSite({ examData }) {
  const [pnum, setPnum] = useState(0);
  const [answer, setAnswer] = useState(new Array(pnum));
  const ptotalNum = examData.questions.length;

  const inputRef = createRef();

  const handleSubmit = e => {
    e.preventDefault();
    let tempAnswer = answer.slice();
    tempAnswer[pnum] = inputRef.current.value;
    setAnswer(tempAnswer);
    inputRef.current.value = "";
    goRightProblem();
  };

  const goLeftProblem = () => {
    if (pnum <= 0) {
      return;
    } else {
      setPnum(pnum - 1);
    }
  };

  const goRightProblem = () => {
    if (pnum >= ptotalNum - 1) {
      return;
    } else {
      setPnum(pnum + 1);
    }
  };

  return (
    <section id="exam-site" className="flex-column-center">
      <div className="exam-info">
        <h1 className="title">{examData.title}</h1>
        <h2 className="name">{examData.owner?.name}</h2>
        <h3 className="eyes-out">시선 이탈 횟수 : 0번</h3>
      </div>
      <div className="exam-question">
        <button className="left-problem" onClick={goLeftProblem}>
          &lt;
        </button>
        <button className="right-problem" onClick={goRightProblem}>
          &gt;
        </button>
        <form onSubmit={handleSubmit}>
          <h1 className="problem-number">{`Problem${pnum + 1}`}</h1>
          <h2 className="problem">{examData.questions[pnum].question}</h2>
          <input ref={inputRef} type="text" placeholder="정답" />
          <br />
          <button>제출</button>
        </form>
      </div>
    </section>
  );
}

export default ExamSite;

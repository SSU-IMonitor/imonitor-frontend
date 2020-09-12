import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./ExamWrapper.css";

function ExamWrapper({ id }) {
  useEffect(() => {
    const tokenType = JSON.parse(localStorage.getItem("TokenType"));
    const accessToken = JSON.parse(localStorage.getItem("AccessToken"));
    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    const header = {
      headers: {
        Authorization: tokenType + " " + accessToken,
      },
    };
    axios.get(`/exams/${id}`, header).then(res => {
      console.log(res);
    });
  }, []);

  return (
    <section id="exam-wrapper" className="flex-column-center">
      <div className="exam-info">
        <h1 className="title">타이틀</h1>
        <h2 className="name">이름</h2>
        <h3 className="remaining">남은시간</h3>
        <h4 className="notice">공지사항</h4>
      </div>
      <div className="exam-detail">
        <div className="exam-detail-context">
          <h1>과목 번호</h1>
          <p>123</p>
        </div>
        <div className="exam-detail-context">
          <h1>과목 이름</h1>
          <p>테스트</p>
        </div>
        <div className="exam-detail-context">
          <h1>시작 시간</h1>
          <p>2020-09-09 00:00:00</p>
        </div>
        <div className="exam-detail-context">
          <h1>종료 시간</h1>
          <p>2020-09-10 00:00:00</p>
        </div>
      </div>
      <div className="button-wrapper">
        <button>시작하기</button>
      </div>
    </section>
  );
}

export default ExamWrapper;

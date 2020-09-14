import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./ExamWrapper.css";

function ExamWrapper({ id, push, setTaking }) {
  const [examData, setExamData] = useState({});
  const [examStatus, setExamStatus] = useState(false);
  const [remaining, setRemaining] = useState("");
  const [remainingStyle, setRemainingStyle] = useState({});

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const UTCtoKST = 1000 * 60 * 60 * 9;

  useEffect(() => {
    const tokenType = JSON.parse(localStorage.getItem("TokenType"));
    const accessToken = JSON.parse(localStorage.getItem("AccessToken"));
    const header = {
      headers: {
        Authorization: tokenType + " " + accessToken,
      },
    };
    axios.get(`/exams/${id}`, header).then(res => {
      setExamData(res.data.exam);
      setStartTime(new Date(res.data.exam.startTime));
      setEndTime(new Date(res.data.exam.endTime));
    });
  }, []);

  useEffect(() => {
    if (Object.keys(examData).length !== 0) {
      setTime();
      setInterval(setTime, 1000);
    }
  }, [examData]);

  const goBack = () => {
    push("/class");
  };

  const setTime = () => {
    const startTime = new Date(examData.startTime) - UTCtoKST;
    const endTime = new Date(examData.endTime) - UTCtoKST;
    const nowTime = new Date();
    const distance = parseInt(startTime - nowTime) / 1000;

    if (distance < 0) {
      if (endTime - nowTime > 0) {
        setRemaining("시험이 진행중입니다");
        setRemainingStyle({ color: "green" });
        setExamStatus(true);
      } else {
        setRemaining(false);
        setRemainingStyle({ color: "red" });
      }
      return;
    }

    setRemaining(calcRemaining(distance) + " 남음");
  };

  const calcRemaining = distance => {
    const day = parseInt(distance / (60 * 60 * 24));
    const hour = parseInt((distance % (60 * 60 * 24)) / (60 * 60));
    const minute = parseInt((distance % (60 * 60)) / 60);
    const second = parseInt(distance % 60);

    return `${day}일 ${hour}시간 ${minute}분 ${second}초`;
  };

  const enterExam = () => {
    if (examStatus) {
      setTaking(true);
    } else {
      alert("아직 시험시간이 아닙니다");
    }
  };

  const ntostwo = num => {
    if (typeof num !== "number") {
      return;
    }

    if (num < 10) {
      return "0" + String(num);
    } else {
      return String(num);
    }
  };

  return (
    <section id="exam-wrapper" className="flex-column-center">
      <div className="close" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="exam-info">
        <h1 className="title">{examData.title}</h1>
        <h2 className="name">{examData.owner?.name}</h2>
        <h3 className="remaining" style={remainingStyle}>
          {remaining ? `${remaining}` : "시험시간이 지났습니다"}
        </h3>
        <h4 className="notice">{examData.notice}</h4>
      </div>
      <div className="exam-detail">
        <div className="exam-detail-context">
          <h1>과목 번호</h1>
          <p>{examData.courseCode}</p>
        </div>
        <div className="exam-detail-context">
          <h1>과목 이름</h1>
          <p>{examData.courseName}</p>
        </div>
        <div className="exam-detail-context">
          <h1>시작 시간</h1>
          <p>{`${startTime.getFullYear()}년 ${ntostwo(startTime.getMonth() + 1)}월 ${ntostwo(startTime.getDate())}일 ${ntostwo(startTime.getHours() - 9)}시 ${ntostwo(startTime.getMinutes())}분`}</p>
        </div>
        <div className="exam-detail-context">
          <h1>종료 시간</h1>
          <p>{`${endTime.getFullYear()}년 ${ntostwo(endTime.getMonth() + 1)}월 ${ntostwo(endTime.getDate())}일 ${ntostwo(endTime.getHours() - 9)}시 ${ntostwo(endTime.getMinutes())}분`}</p>
        </div>
      </div>
      <div className="button-wrapper">
        <button onClick={enterExam}>시작하기</button>
      </div>
    </section>
  );
}

export default ExamWrapper;

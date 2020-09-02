import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { closeModal } from "actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./AddClassModal.css";

function AddClassModal({ isOpen, close }) {
  const [search, setSearch] = useState("");
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    const tokenType = JSON.parse(localStorage.getItem("TokenType"));
    const accessToken = JSON.parse(localStorage.getItem("AccessToken"));
    const header = {
      headers: {
        Authorization: tokenType + " " + accessToken,
      },
    };

    axios
      .get(`/exams`, header)
      .then(res => {
        setClassList(res.data.exams);
      })
      .catch(error => {
        if (error.response.status === 401) {
          console.log("토크만료");
        }
        throw error;
      });
  }, []);

  const addClass = e => {
    const examId = parseInt(e.target.id);
    const tokenType = JSON.parse(localStorage.getItem("TokenType"));
    const accessToken = JSON.parse(localStorage.getItem("AccessToken"));
    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    const header = {
      headers: {
        Authorization: tokenType + " " + accessToken,
      },
    };
    const body = {
      examId,
    };

    axios
      .post(`/users/${userInfo.id}/exams`, body, header)
      .then(res => {
        alert(`${res.data.exam.title}을(를) 담았습니다.`)
      })
      .catch(error => {
        if (error.response.status === 404) {
          alert("없는 시험을 추가하셨습니다.");
        } else if (error.response.status === 409) {
          alert("이미 시험을 담았습니다.");
        }
        throw error;
      });
  };

  const handleSearch = e => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div id="add-class-layer" style={isOpen ? { display: "block" } : { display: "none" }} onClick={close}></div>
      <div id="add-class" style={isOpen ? { display: "block" } : { display: "none" }}>
        <FontAwesomeIcon icon={faTimes} id="close" onClick={close} />
        <div className="header">
          <h1>전체 과목 목록</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="과목을 검색해주세요" onChange={handleSearch} />
        </div>
        <div className="content">
          <ul className="list">
            {classList.map(cls => (
              <li key={cls.id}>
                <h1>{cls.title}</h1>
                <h2>과목 | {cls.courseName}</h2>
                <h2>코드 | {cls.courseCode}</h2>
                <button id={cls.id} onClick={addClass}>
                  추가
                </button>
              </li>
            ))}
          </ul>
        </div>
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

export default connect(null, mapDispatchToProps)(AddClassModal);

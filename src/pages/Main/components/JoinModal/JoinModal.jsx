import React, { useState, useEffect, createRef } from "react";
import { connect } from "react-redux";
import { closeModal } from "actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./JoinModal.css";
import axios from "axios";

function JoinModal({ isOpen, close }) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const confirmRef = createRef();

  useEffect(() => {
    if (!passwordConfirm) {
      confirmRef.current.style.visibility = "hidden";
    } else {
      confirmRef.current.style.visibility = "visible";
    }

    if (password === passwordConfirm) {
      confirmRef.current.style.color = "green";
      confirmRef.current.innerText = "비밀번호가 일치합니다.";
    } else {
      confirmRef.current.style.color = "red";
      confirmRef.current.innerText = "비밀번호가 일치하지않습니다.";
    }
  }, [password, passwordConfirm, confirmRef]);

  const handleInput = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        return;
      case "major":
        setMajor(e.target.value);
        return;
      case "studentId":
        setStudentId(e.target.value);
        return;
      case "password":
        setPassword(e.target.value);
        return;
      case "passwordConfirm":
        setPasswordConfirm(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    axios
      .post("/auth/sign-up", {
        id: studentId,
        name,
        password,
        major,
      })
      .then(res => {
        alert("회원가입이 완료되었습니다.");
        window.location.replace("/");
      })
      .catch(error => {
        if (error.response.status === 500) {
          alert("이미 해당 학번 가입자가 있습니다.");
        }
      });
  };

  return (
    <>
      <div id="join-modal-layer" style={isOpen ? { display: "block" } : { display: "none" }} onClick={close}></div>
      <div id="join-modal" style={isOpen ? { display: "flex" } : { display: "none" }} className="flex-column-center">
        <FontAwesomeIcon icon={faTimes} id="close" onClick={close} />
        <div className="logo">
          <img src="/images/logo_lettering.png" alt="logo" />
        </div>
        <form onSubmit={handleSubmit} className="join-form">
          <span>이름</span>
          <input name="name" type="text" required minLength="2" onChange={handleInput} />
          <span>전공</span>
          <input name="major" type="text" required onChange={handleInput} />
          <span>학번</span>
          <input name="studentId" type="text" required onChange={handleInput} />
          <span>비밀번호</span>
          <input name="password" type="password" required minLength="6" onChange={handleInput} />
          <span>비밀번호 확인</span>
          <input name="passwordConfirm" type="password" required minLength="6" onChange={handleInput} />
          <p ref={confirmRef}>비밀번호확인 상태 표시</p>
          <button>회원가입</button>
        </form>
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

export default connect(null, mapDispatchToProps)(JoinModal);

import React, { useState, createRef } from "react";
import axios from "axios";
import "./LoginForm.css";

function LoginForm() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const idInputRef = createRef();
  const pwInputRef = createRef();

  const login = () => {
    axios
      .post("/auth/sign-in", {
        id: studentId,
        password,
      })
      .then(res => {
        localStorage.setItem("AccessToken", JSON.stringify(res.data.accessToken));
        localStorage.setItem("RefreshToken", JSON.stringify(res.data.refreshToken));
        localStorage.setItem("TokenType", JSON.stringify(res.data.tokenType));
        localStorage.setItem("UserInfo", JSON.stringify(res.data.userInfo));
        window.location.pathname = "/class";
      })
      .catch(error => {
        if (error.response.status === 500) {
          alert("학번을 8자리 입력해주세요.");
          idInputRef.current.focus();
        } else if (error.response.status === 404) {
          alert("아이디나 비밀번호가 틀렸습니다.");
          idInputRef.current.value = "";
          pwInputRef.current.value = "";
          idInputRef.current.focus();
        }
      });
  };

  const handleInput = e => {
    switch (e.target.name) {
      case "studentId":
        setStudentId(e.target.value);
        return;
      case "password":
        setPassword(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={handleSubmit} id="login-form" className="flex-row-center">
      <div className="input-wrapper flex-column-center">
        <input ref={idInputRef} name="studentId" type="text" placeholder="학번" required maxLength="8" onChange={handleInput} />
        <input ref={pwInputRef} name="password" type="password" placeholder="비밀번호" required onChange={handleInput} />
      </div>
      <div className="button-wrapper flex-row-center">
        <button>로그인</button>
      </div>
    </form>
  );
}

export default LoginForm;

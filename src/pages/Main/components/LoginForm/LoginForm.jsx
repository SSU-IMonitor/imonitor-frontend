import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <form id="login-form" className="flex-row-center">
      <div className="input-wrapper flex-column-center">
        <input type="text" placeholder="아이디" required />
        <input type="password" placeholder="비밀번호" required />
      </div>
      <div className="button-wrapper flex-row-center">
        <button>로그인</button>
      </div>
    </form>
  );
}

export default LoginForm;

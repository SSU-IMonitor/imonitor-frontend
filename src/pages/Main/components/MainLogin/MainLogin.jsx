import React from "react";
import { LoginForm } from "../../components";
import "./MainLogin.css";

function MainLogin() {
  return (
    <section id="main-login" className="flex-column-center">
      <div className="logo">
        <img src="/images/logo_lettering.png" alt="logo" />
      </div>
      <LoginForm />
      <div className="join-ment">
        <p>아직 회원이 아니신가요? <span className="join">회원가입</span></p>
      </div>
    </section>
  );
}

export default MainLogin;

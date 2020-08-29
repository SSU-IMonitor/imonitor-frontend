import React from "react";
import { connect } from "react-redux";
import { LoginForm } from "../../components";
import { openModal } from "actions";
import "./MainLogin.css";

function MainLogin({ open }) {
  return (
    <section id="main-login" className="flex-column-center">
      <div className="logo">
        <img src="/images/logo_lettering.png" alt="logo" />
      </div>
      <LoginForm />
      <div className="join-ment">
        <p>
          아직 회원이 아니신가요? <span className="join" onClick={open}>회원가입</span>
        </p>
      </div>
    </section>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    open: () => {
      dispatch(openModal())
    }
  };
}

export default connect(null, mapDispatchToProps)(MainLogin);

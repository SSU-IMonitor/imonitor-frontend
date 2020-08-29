import React from "react";
import { connect } from "react-redux";
import { MainLogin, JoinModal } from "./components";
import "./Main.css";

function Main({ modalState }) {
  return (
    <div id="main">
      <MainLogin />
      <JoinModal isOpen={modalState.modal} />
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    modalState: state,
  };
}

export default connect(mapStateToProps)(Main);

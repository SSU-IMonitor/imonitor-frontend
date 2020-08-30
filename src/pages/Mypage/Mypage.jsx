import React from "react";
import { connect } from "react-redux";
import { Nav, ClassList, Info, AddClassModal } from "./components";
import "./Mypage.css";

function Mypage({ modalState }) {
  return (
    <div id="my-page">
      <Nav />
      <div className="content-wrapper">
        <ClassList />
        <Info />
      </div>
      <AddClassModal isOpen={modalState.modal} />
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    modalState: state,
  };
}

export default connect(mapStateToProps)(Mypage);

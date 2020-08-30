import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal } from "actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./AddClassModal.css";

function AddClassModal({ isOpen, close }) {
  const [search, setSearch] = useState("");

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
            <li>과목1</li>
            <li>과목2</li>
            <li>과목3</li>
            <li>과목4</li>
            <li>과목5</li>
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

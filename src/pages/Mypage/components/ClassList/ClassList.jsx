import React from "react";
import "./ClassList.css";

function ClassList() {

  return (
    <section id="class-list">
      <div className="header">
        <h1>내 과목 목록</h1>
        <button>수업 추가</button>
      </div>
      <ul className="list">
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <li>
          <h1>과목 중간고사</h1>
          <h2>오범수</h2>
        </li>
        <div className="paging flex-row-center">
          <span>-</span>
          <span className="active">1</span>
          <span>2</span>
          <span>+</span>
        </div>
      </ul>
    </section>
  );
}

export default ClassList;

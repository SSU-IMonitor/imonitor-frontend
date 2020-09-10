import React, { useState, useEffect } from "react";
import axios from "axios";
import { openModal } from "actions";
import { connect } from "react-redux";
import "./ClassList.css";

function ClassList({ open }) {
  const [list, setList] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  useEffect(() => {
    const tokenType = JSON.parse(localStorage.getItem("TokenType"));
    const accessToken = JSON.parse(localStorage.getItem("AccessToken"));
    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    const header = {
      headers: {
        Authorization: tokenType + " " + accessToken,
      },
    };

    axios
      .get(`/users/${userInfo.id}/exams`, header)
      .then(res => {
        const exams = res.data.exams;
        let divList = [];
        for (let i = 0; i <= exams.length / 10; i++) {
          divList.push(exams.slice(i * 10, (i+1) * 10));
        }
        setList(divList);
        setTotalPage(makePage(res.data.exams.length));
      })
      .catch(error => {
        throw error;
      });
  }, []);

  const makePage = totalClass => {
    let array = [];
    for (let i = 1; i <= totalClass / 10 + 1; i++) {
      array.push(i);
    }
    return array;
  };
  const changePage = e => {
    setCurPage(parseInt(e.target.innerText));
  };
  const leftPage = () => {
    if (curPage === 1) {
      return;
    } else {
      setCurPage(curPage - 1);
    }
  };
  const rightPage = () => {
    if (curPage === totalPage.length) {
      return;
    } else {
      setCurPage(curPage + 1);
    }
  };

  return (
    <section id="class-list">
      <div className="header">
        <h1>내 과목 목록</h1>
        <button onClick={open}>수업 추가</button>
      </div>
      <ul className="list">
        {list[curPage - 1]
          ? list[curPage - 1].map(cls => (
              <li key={cls.id}>
                <h1>{cls.title}</h1>
                <h2>{cls.owner.name}</h2>
              </li>
            ))
          : null}
        <div className="paging flex-row-center">
          <span onClick={leftPage}>&lt;</span>
          {totalPage.map(page => (
            <span key={page} onClick={changePage} className={page === curPage ? "active" : ""}>
              {page}
            </span>
          ))}
          <span onClick={rightPage}>&gt;</span>
        </div>
      </ul>
    </section>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    open: () => {
      dispatch(openModal());
    },
  };
}

export default connect(null, mapDispatchToProps)(ClassList);

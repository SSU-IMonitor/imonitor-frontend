import React, { useState, useEffect } from "react";
import { Nav, ClassList, Info } from "./components";
import "./Mypage.css";

function Mypage() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("UserInfo")));
  }, []);

  return (
    <div id="my-page">
      <Nav />
      <div className="content-wrapper">
        <ClassList />
        <Info />
      </div>
    </div>
  );
}

export default Mypage;

import React from "react";
import "./Nav.css";

function Nav() {
  const logout = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
    localStorage.removeItem("TokenType");
    localStorage.removeItem("UserInfo");
    window.location.pathname = "/";
  };

  return (
    <nav id="nav">
      <img src="/images/logo.png" alt="logo" />
      <span onClick={logout}>로그아웃</span>
    </nav>
  );
}

export default Nav;

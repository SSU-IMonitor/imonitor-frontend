import React from "react";
import "./NotFound.css";

function NotFound() {
  const goHome = () => {
    window.location.pathname = "/";
  };
  return (
    <section id="not-found" class="flex-column-center">
      <p>"잘못된 경로로 접근하셨습니다"</p>
      <button onClick={goHome}>메인으로 가기</button>
    </section>
  );
}

export default NotFound;

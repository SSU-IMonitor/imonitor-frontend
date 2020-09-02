import React from "react";
import "./Info.css";

function Info() {
  const info = JSON.parse(localStorage.getItem("UserInfo"));
  return (
    <section id="info" className="flex-column-center">
      <img src="/images/profile_img.png" alt="profile" />
      <div className="info-content">
        <p>{info.name}</p>
        <p>{info.id}</p>
        <p>{info.major}</p>
      </div>
    </section>
  );
}

export default Info;

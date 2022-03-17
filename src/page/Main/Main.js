import React from "react";
import Card from "../../commomComponent/Card";
import "./Main.scss";

function Main() {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="gridbox-wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Main;

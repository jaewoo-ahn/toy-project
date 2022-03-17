import React from "react";
import "./Text.scss";

function Text() {
  return (
    <div className="text-wrapper">
      <div className="text-box">
        <input type="text" className="text-title" placeholder="title" />
        <textarea className="text-description"></textarea>
        <input type="date" className="text-date" />
      </div>
    </div>
  );
}

export default Text;

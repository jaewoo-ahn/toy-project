import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div className="Nav-Container">
      <div className="title">Jaewoo's</div>
      <div className="nav-button-container">
        <button className="button">Page1</button>
        <button className="button">Page2</button>
        <button className="button">Page3</button>
      </div>
    </div>
  );
}

export default Nav;

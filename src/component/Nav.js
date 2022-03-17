import React, {useState} from "react";
import Login from "../commomComponent/LoginRegister/Login";
import "./Nav.scss";

function Nav() {
  const [isLogin, setIsLogin] = useState(false);

  const LoginModal = () => {
    setIsLogin(!isLogin);
  };
  console.log(isLogin);
  return (
    <>
      <div className="Nav-Container">
        <div className="title">Zues</div>
        <div className="nav-button-container">
          <button className="button">Page1</button>
          <button className="button" onClick={LoginModal}>
            Login
          </button>
          <button className="button">Page3</button>
        </div>
      </div>
      {isLogin && (
        <div className="modal-wrapper">
          <Login />
        </div>
      )}
    </>
  );
}

export default Nav;

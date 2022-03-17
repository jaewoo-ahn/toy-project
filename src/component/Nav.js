import React, {useState} from "react";
import Login from "../commomComponent/LoginRegister/Login";
import Register from "../commomComponent/LoginRegister/Register";
import "./Nav.scss";

function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const LoginModal = () => {
    setIsLogin(!isLogin);
    setIsRegister(false);
  };

  const RegisterModal = () => {
    setIsRegister(!isRegister);
    setIsLogin(false);
  };

  return (
    <>
      <div className="Nav-Container">
        <div className="title">Zues</div>
        <div className="nav-button-container">
          <button className="button">Page1</button>
          <button className="button" onClick={LoginModal}>
            Login
          </button>
          <button className="button" onClick={RegisterModal}>
            Register
          </button>
        </div>
      </div>
      {isLogin && (
        <div className="modal-wrapper">
          <Login />
        </div>
      )}
      {isRegister && (
        <div className="modal-wrapper">
          <Register />
        </div>
      )}
    </>
  );
}

export default Nav;

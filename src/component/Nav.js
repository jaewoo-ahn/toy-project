import React, {useState} from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import Login from "../commomComponent/LoginRegister/Login";
import Register from "../commomComponent/LoginRegister/Register";
import "./Nav.scss";

function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const location = useLocation();

  const LoginModal = () => {
    setIsLogin(!isLogin);
    setIsRegister(false);
  };

  const RegisterModal = () => {
    setIsRegister(!isRegister);
    setIsLogin(false);
  };

  const MovingPage = () => {
    location("/text");
  };
  return (
    <>
      <div className="Nav-Container">
        <Link to="/">
          <div className="title">Zues</div>
        </Link>
        <div className="nav-button-container">
          <Link to="/text">
            <button className="button" onClick={MovingPage}>
              text{" "}
            </button>
          </Link>
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

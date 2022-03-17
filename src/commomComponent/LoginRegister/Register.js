import React from "react";
import "./Register.scss";

function Register() {
  return (
    <div className="register-wrapper">
      <div className="register-title">Memoring</div>
      <input type="text" placeholder="Id" className="register-id" />
      <input
        type="password"
        placeholder="Password"
        className="register-password"
      />
      <input
        type="password"
        placeholder="Password"
        className="register-password"
      />
      <button className="register-button">register</button>
    </div>
  );
}

export default Register;

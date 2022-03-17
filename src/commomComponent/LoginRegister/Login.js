import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-title">Memoring</div>
      <input type="text" placeholder="Id" className="login-id" />
      <input
        type="password"
        placeholder="Password"
        className="login-password"
      />
      <button className="login-button" />
    </div>
  );
}

export default Login;

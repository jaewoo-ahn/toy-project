import React, {useState} from "react";
import GoogleSignin from "./Google";
import "./Login.scss";

function Login() {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");

  return (
    <div className="login-wrapper">
      <div className="login-title">Memoring</div>
      <form className="login-form">
        <input
          type="email"
          placeholder="Id"
          className="login-id"
          required
          value={isEmail}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-password"
          required
          value={isPassword}
        />
        <input type="submit" className="login-button" />
      </form>
      <GoogleSignin />
    </div>
  );
}

export default Login;

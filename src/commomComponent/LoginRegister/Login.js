import React, {useState} from "react";
import "./Login.scss";

function Login() {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const onChange = (event) => {
    const {
      target: {name, value},
    } = event;
    if (name === "email") {
      setIsEmail(value);
    } else if (name === "password") {
      setIsPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-wrapper">
      <div className="login-title">Memoring</div>
      <form className="login-form" onSubmit={onSubmit}>
        <input type="email" placeholder="Id" className="login-id" />
        <input
          type="password"
          placeholder="Password"
          className="login-password"
        />
        <input type="submit" className="login-button" />
      </form>
    </div>
  );
}

export default Login;

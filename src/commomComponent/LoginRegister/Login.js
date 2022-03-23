import React, {useState} from "react";
// import {Analytics} from "@firebase/analytics";

import "./Login.scss";

function Login() {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const checkValue = (event) => {
    const {
      target: {name, value},
    } = event;
    if (name === "email") {
      setIsEmail(value);
    } else if (name === "password") {
      setIsPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   let data;
    //   if (newAccount) {
    //     data = await Analytics.createUserWithEmailAndPassword(
    //       isEmail,
    //       isPassword
    //     );
    //   } else {
    //     data = await Analytics.signInWithEmailAndPassword(isEmail, isPassword);
    //   }
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div className="login-wrapper">
      <div className="login-title">Memoring</div>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Id"
          className="login-id"
          onChange={checkValue}
          required
          value={isEmail}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-password"
          onChange={checkValue}
          required
          value={isPassword}
        />
        <input
          type="submit"
          className="login-button"
          value={newAccount ? "Create Account" : "Login"}
        />
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Login" : "Create Account"}
      </span>
    </div>
  );
}

export default Login;

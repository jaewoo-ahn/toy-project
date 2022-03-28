import React, {useCallback, useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import "./Login.scss";

function Login() {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isSignedUp, setSignedUp] = useState(false);

  const signUp = async () => {
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(
      auth,
      isEmail,
      isSignedUp
    );
    console.log(result);
  };

  const signIn = () => {
    alert(`${isEmail}과 ${isPassword}로 로그인을 합니다`);
  };

  const onEmailChange = useCallback((e) => {
    setIsEmail(e.target.value);
  }, []);
  const onPasswordChange = useCallback((e) => {
    setIsPassword(e.target.value);
  }, []);
  return (
    <div className="login-wrapper">
      <div className="login-title">Memoring</div>
      <form className="login-form">
        <input
          type="email"
          placeholder="Id"
          className="login-id"
          value={isEmail}
          onChange={onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-password"
          value={isPassword}
          onChange={onPasswordChange}
        />
        <input type="submit" className="login-button" />
      </form>
    </div>
  );
}

export default Login;

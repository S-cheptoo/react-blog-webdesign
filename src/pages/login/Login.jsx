import React from 'react'
import "./login.css";

function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your Email.." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your Password.." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}

export default Login;

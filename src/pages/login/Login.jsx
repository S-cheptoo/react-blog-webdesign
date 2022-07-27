import React from 'react'
import "./login.css";
import {
  Link
} from "react-router-dom";


function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your Email.." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your Password.." />
        <button className="loginButton">
        <Link className="link" to="/login">Login</Link>
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  );
}

export default Login;

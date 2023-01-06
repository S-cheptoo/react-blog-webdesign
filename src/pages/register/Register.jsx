import React from 'react'
import "./register.css";
import { useState } from 'react';
import {Link} from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your Username.." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your Email.." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your Password.." />
        <button className="registerButton">
        <Link className="link" to="/register">Register</Link>
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  )
}

export default Register;
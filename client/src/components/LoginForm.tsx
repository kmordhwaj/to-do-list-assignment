import React, { useState } from "react";
//import "./form.css";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  return (
    <div>
      <div className="rightBody">
        <form action="">
          <div className="form">
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter Your Email"
              className="textInput"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Enter Your Password"
              className="textInput"
            />
          </div>
          <button className="navButto">Login</button>
        </form>
        <div className="login">
          <span className="already">Don't have an account?</span>
          <nav>
            <Link to="/register" className="loginaccount">
              Register
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

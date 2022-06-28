import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/images/logo5.svg";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div classNameName="container">
        <div className="container_sub">
          <div className="user_card">
            <div className="user_card_sub">
              <div className="brand_logo_container">
                <img src={logo} className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="form_container">
              <form>
                <div className="input-group">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bi bi-person-fill icon"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                    className="form-control input_user"
                    value={userName}
                    placeholder="username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bi bi-key-fill icon"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    className="form-control input_pass"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="login_container">
                  <Link
                    to="/userFeed"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <button
                      type="button"
                      name="button"
                      className="btn login_btn"
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <div className="signupContainer">
                  <div className="signupLinkText">
                    Don't have an account?{" "}
                    <Link to="/signup" className="signupLink">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

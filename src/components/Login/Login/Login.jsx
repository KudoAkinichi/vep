// import { useState, useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const onButtonStrokeContainerClick = useCallback(() => {
    navigate("/Home");
  }, [navigate]);

    return (
      <div className="login">
        <b className="welcome-back">Welcome back.</b>
        <div className="hey">Hey!</div>
        <div className="enter-your-registered">
          Enter your registered email ID and password.
        </div>
        <div className="login-to-your">Login to your account.</div>
        <div className="buttonstroke" onClick={onButtonStrokeContainerClick}>
          <div className="login1">login</div>
        </div>
        <div className="dont-have-an-account-parent">
          <div className="dont-have-an">Don’t have an account?</div>
          <div className="sign-up">
            <a href="/auth">Sign up</a> 
          </div>
        </div>
        <div className="forgot-password-parent">
          <div className="dont-have-an">Forgot Password?</div>
          <div className="sign-up">Reset password</div>
        </div>
        <input className="input" type="text" placeholder="Enter email ID" />
        <input className="input1" type="text" placeholder="Set Password" />
        <img
          className="undraw-pay-online-b-1-hk-1-1"
          alt=""
          src="/undraw-pay-online-b1hk-1-1.svg"
        />
        <div className="login-child" />
        <img className="login-item" alt="" src="/group-9441.svg" />
      </div>
    );
  };
  
  export default Login;
  
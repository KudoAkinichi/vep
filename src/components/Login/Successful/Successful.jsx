import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Successful.css";

const Successful = () => {
    
    const navigate = useNavigate();
  
    const onLoginNowTextClick = useCallback(() => {
      navigate("/");
    }, [navigate]);

  return (
    <div className="successful">
      <b className="account-created-successfully">
        Account created Successfully!!!
      </b>
      <div className="you-can-login">
        You can login to your account through the credentials created.
      </div>
      <div className="login-now" onClick={onLoginNowTextClick}>
        Login Now
      </div>
      <div className="account-verification-is-pendin-parent">
        <div className="account-verification-is">
          Account verification is pending, you can verify your account through
          the mail sent to your email.
        </div>
        <img
          className="fluentinfo-20-regular-icon5"
          alt=""
          src="/fluentinfo20regular.svg"
        />
      </div>
      <img
        className="undraw-completing-re-i7ap-1-icon"
        alt=""
        src="/undraw-completing-re-i7ap-1.svg"
      />
      <img className="successful-child" alt="" src="/frame-13.svg" />
    </div>
  );
};

export default Successful;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup2.css";
const Signup2 = () => {
  const navigate = useNavigate();

  const onButtonStrokeContainerClick = useCallback(() => {
    navigate("/auth/2");
  }, [navigate]);

  return (
    <div className="signup1">
      <div className="enter-your-email">
        Enter your email ID to register your account and set a password.
      </div>
      <div className="create-new-login">Create new Login credentials.</div>
      <div className="buttonstroke2" onClick={onButtonStrokeContainerClick}>
        <div className="next1">Next</div>
        <img
          className="fluentarrow-left-20-filled-icon"
          alt=""
          src="/fluentarrowleft20filled1.svg"
        />
      </div>
      <div className="input3">
        <div className="enter-email-id">Enter email ID</div>
        <img
          className="fluentmail-20-regular-icon"
          alt=""
          src="/fluentmail20regular.svg"
        />
      </div>
      <div className="input4">
        <div className="enter-email-id">Set Password</div>
        <img
          className="fluentmail-20-regular-icon"
          alt=""
          src="/fluentlockclosed20regular.svg"
        />
        <img
          className="fluenteye-20-regular-icon"
          alt=""
          src="/fluenteye20regular2.svg"
        />
      </div>
      <div className="input5">
        <div className="enter-email-id">Confirm Password</div>
        <img
          className="fluentmail-20-regular-icon"
          alt=""
          src="/fluentlockclosed20regular.svg"
        />
        <img
          className="fluenteye-20-regular-icon"
          alt=""
          src="/fluenteye20regular2.svg"
        />
      </div>
      <b className="secure-your-login">Secure your login process</b>
      <div className="lets">Lets’</div>
      <div className="signup-inner" />
      <img
        className="undraw-secure-login-pdn4-1-icon"
        alt=""
        src="/undraw-secure-login-pdn4-1.svg"
      />
      <img className="signup-child1" alt="" src="/group-944.svg" />
    </div>
  );
};

export default Signup2;

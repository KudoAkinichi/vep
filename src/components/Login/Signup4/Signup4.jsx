import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup4.css";
const Signup4 = () => {
  const navigate = useNavigate();

  const onButtonStrokeContainerClick = useCallback(() => {
    navigate("/auth/4");
  }, [navigate]);

  return (
    <div className="signup2">
      <b className="steps-remaining">Steps remaining</b>
      <div className="few">Few</div>
      <div className="provide-your-required">
        Provide your required business details for your account.
      </div>
      <div className="business-details">Business Details</div>
      <div className="buttonstroke3" onClick={onButtonStrokeContainerClick}>
        <div className="next2">Next</div>
        <img
          className="fluentarrow-left-20-filled-icon1"
          alt=""
          src="/fluentarrowleft20filled2.svg"
        />
      </div>
      <div className="input6">
        <div className="enter-company-name">Enter Company Name</div>
      </div>
      <div className="input7">
        <div className="enter-company-name">Select business type</div>
        <img
          className="fluentcaret-down-24-filled-icon"
          alt=""
          src="/fluentcaretdown24filled6.svg"
        />
      </div>
      <img
        className="undraw-profile-data-re-v81r-icon"
        alt=""
        src="/undraw-profile-data-re-v81r.svg"
      />
      <div className="line-div" />
      <img className="frame-icon" alt="" src="/frame-13.svg" />
    </div>
  );
};

export default Signup4;

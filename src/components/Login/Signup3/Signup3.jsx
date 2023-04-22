import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup3.css";
const Signup3 = () => {
  const navigate = useNavigate();

  const onButtonStrokeContainerClick = useCallback(() => {
    navigate("/auth/3");
  }, [navigate]);

  return (
    <div className="signup5">
    <div className="basic-details1">Basic Details</div>
    <div className="provide-all-your-required-deta-group">
      <div className="provide-all-your1">
        Provide all your required details for your account.
      </div>
      <div className="input23">
        <div className="enter-your-first1">Enter your First Name</div>
      </div>
      <div className="input24">
        <div className="enter-your-first1">Enter your Last Name</div>
      </div>
      <div className="input25">
        <div className="enter-your-first1">
          Enter your Date of birth (dd/mm/yyyy)
        </div>
        <img
          className="fluentcalendar-ltr-20-regular-icon1"
          alt=""
          src="/fluentcalendarltr20regular.svg"
        />
      </div>
      <div className="input26">
        <div className="enter-your-first1">Enter your Nationality</div>
        <img
          className="fluentcalendar-ltr-20-regular-icon1"
          alt=""
          src="/fluentcaretdown24filled.svg"
        />
      </div>
    </div>
    <div className="account-will-be-used-byfor-group">
      <div className="account-will-be1">Account will be used by/for:</div>
      <div className="input27">
        <div className="individual1">Individual</div>
        <img className="input-child1" alt="" src="/ellipse-5.svg" />
      </div>
      <div className="input28">
        <div className="business1">Business</div>
        <img className="input-child1" alt="" src="/ellipse-4.svg" />
      </div>
    </div>
    <div className="provide-your-business1">
      Provide your business address:
    </div>
    <div className="input29">
      <div className="enter-your-first1">Address line 1</div>
    </div>
    <div className="input30">
      <div className="enter-your-first1">Address line 2</div>
    </div>
    <div className="input31">
      <div className="enter-your-first1">Street</div>
    </div>
    <div className="input32">
      <div className="enter-your-first1">City/Town</div>
    </div>
    <div className="input33">
      <div className="enter-your-first1">Country</div>
      <img
        className="fluentcalendar-ltr-20-regular-icon1"
        alt=""
        src="/fluentcaretdown24filled.svg"
      />
    </div>
    <div className="input34">
      <div className="enter-your-first1">State</div>
      <img
        className="fluentcalendar-ltr-20-regular-icon1"
        alt=""
        src="/fluentcaretdown24filled1.svg"
      />
    </div>
    <div className="input35">
      <div className="enter-your-first1">Pin-code</div>
    </div>
    <div className="signup-child6" />
    <div className="set-your-wallets-primary-curr-group">
      <div className="set-your-wallets1">
        Set your wallet’s primary currency
      </div>
      <div className="input36">
        <div className="enter-your-first1">Select currency</div>
        <img
          className="fluentcaret-down-24-filled-icon8"
          alt=""
          src="/fluentcaretdown24filled1.svg"
        />
      </div>
    </div>
    <div className="rectangle-group">
      <div className="group-item" />
      <div className="fluentcheckbox-unchecked-20-r-group">
        <img
          className="fluentcheckbox-unchecked-20-r-icon1"
          alt=""
          src="/fluentcheckboxunchecked20regular.svg"
        />
        <div className="i-have-read-container1">
          <span>{`I have read and I agree to the `}</span>
          <span className="terms-and-conditions1">Terms and Conditions</span>
          <span>{`, and the `}</span>
          <span className="terms-and-conditions1">Privacy Policy</span>
          <span>.</span>
        </div>
      </div>
      <div className="buttonstroke6" onClick={onButtonStrokeContainerClick}>
        <div className="next4">Next</div>
        <img
          className="fluentarrow-left-20-filled-icon3"
          alt=""
          src="/fluentarrowleft20filled.svg"
        />
      </div>
    </div>
    <img className="signup-child7" alt="" src="/frame-1.svg" />
  </div>
);
};

export default Signup3;

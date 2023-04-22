import "./Signup1.css";

const Signup1 = () => {
  return (
    <div className="signup">
      <b className="welcome">Welcome.</b>
      <div className="hello">Hello!</div>
      <div className="enter-your-phone">
        Enter your phone number to register with your account.
      </div>
      <div className="sign-up-to">Sign Up to Vep.</div>
      <div className="buttonstroke1">
        <div className="next">
          <a href="/auth/1">NEXT</a>{" "}
        </div>
        <img className="group-icon" alt="" src="/group4.svg" />
      </div>
      <div className="input2">
        <div className="div">+234</div>
        <div className="enter-phone-number">Enter phone number</div>
        <img
          className="emojioneflag-for-nigeria-icon"
          alt=""
          src="/emojioneflagfornigeria.svg"
        />
        <div className="input-child" />
      </div>
      <div className="already-have-an-account-parent">
        <div className="already-have-an">Already have an account?</div>
        <div className="login2">Login</div>
      </div>
      <div className="signup-child" />
      <img
        className="undraw-transfer-money-rywa-2-icon"
        alt=""
        src="/undraw-transfer-money-rywa-2.svg"
      />
      <img className="signup-item" alt="" src="/group-944.svg" />
    </div>
  );
};

export default Signup1;

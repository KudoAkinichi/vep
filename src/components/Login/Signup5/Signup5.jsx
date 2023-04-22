import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup5.css";
const Signup5 = () => {
    const navigate = useNavigate();

    const onButtonStrokeContainerClick5 = useCallback(() => {
      navigate("/auth/5");
    }, [navigate]);
  
    return (
   <div className="signup3">
      <b className="get-started">Get started!</b>
      <div className="lets1">Lets’</div>
      <div className="set-up-your">Set up your username</div>
      <div className="buttonstroke4" onClick={onButtonStrokeContainerClick5} >
        <div className="proceed">Proceed</div>
      </div>
      <div className="input8">
        <div className="enter-username">Enter username</div>
        <div className="vepme">vep.me/</div>
        <div className="input-item" />
      </div>
      <div className="this-will-be">
        This will be the unique name using which other users can find and pay
        you.
      </div>
      <img
        className="undraw-account-re-o7id-icon"
        alt=""
        src="/undraw-account-re-o7id.svg"
      />
      <div className="signup-child2" />
      <img className="signup-child3" alt="" src="/frame-13.svg" />
    </div>
  );
};

export default Signup5;

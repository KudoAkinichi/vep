import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity.css";
const Activity = () => {
  const navigate = useNavigate();

  const onRectangle5Click = useCallback(() => {
    navigate("/Home");
  }, [navigate]);

  const Successful = useCallback(() => {
    navigate("/Status");
  }, [navigate]);
  
  const Pending = useCallback(() => {
    navigate("/Status1");
  }, [navigate]);

  return (
    <div className="activity">
      <img className="activity-child" alt="" src="/group-872.svg" />
      <div className="activity-item" />
      <img
        className="fluentwallet-20-filled-icon1"
        alt=""
        src="/fluentwallet20filled2.svg"
      />
      <img
        className="fluentarrow-sort-20-filled-icon1"
        alt=""
        src="/fluentarrowsort20filled2.svg"
      />
      <img
        className="fluenthome-20-filled-icon1"
        alt=""
        src="/fluenthome20filled1.svg"
        onClick={onRectangle5Click}
      />
      <img
        className="fluentpower-20-regular-icon1"
        alt=""
        src="/fluentpower20regular2.svg"
      />
      <img
        className="fluentperson-20-filled-icon1"
        alt=""
        src="/fluentperson20filled5.svg"
      />
      <img
        className="fluentalert-20-filled-icon1"
        alt=""
        src="/fluentalert20filled.svg"
      />
      <div className="activities">Activities</div>
      <div className="activity-inner" />
      <div className="time-date">{`Time & Date`}</div>
      <div className="fromto">From/To</div>
      <div className="account">Account</div>
      <div className="amount">Amount</div>
      <b className="b">$ 999.00</b>
      <b className="b1">$ 999.00</b>
      <b className="b2">$ 999.00</b>
      <b className="b3">$ 999.00</b>
      <b className="b4">$ 999.00</b>
      <b className="b5">$ 999.00</b>
      <div className="from-9876">From ******9876</div>
      <div className="to-wallet">to Wallet</div>
      <div className="to-wallet1">to Wallet</div>
      <div className="from-98761">From ******9876</div>
      <div className="from-98762">From ******9876</div>
      <div className="to-wallet2">to Wallet</div>
      <div className="pm">12:00 PM</div>
      <div className="pm1">12:00 PM</div>
      <div className="may">25 May</div>
      <div className="pm2">12:00 PM</div>
      <div className="may1">25 May</div>
      <div className="may2">25 May</div>
      <div className="activity-child1" />
      <div className="activity-child2" />
      <div className="activity-child3" />
      <div className="activity-child4" />
      <div className="activity-child5" />
      <div className="activity-child6" />
      <img className="activity-child7" alt="" src="/group-802.svg" />
      <div className="paid-to-sai" onClick={Pending}>Paid to Sai Swarup</div>
      <div className="recieved-from-sai" onClick={Successful}>Recieved from Sai Swarup</div>
      <div className="recieved-from-sai1" onClick={Successful}>Recieved from Sai Swarup</div>
      <div className="added-to-wallet" onClick={Successful}>Added to wallet</div>
      <div className="paid-to-sai1" onClick={Pending}>Paid to Sai Swarup</div>
      <div className="recieved-from-sai2" onClick={Successful}>Recieved from Sai Swarup</div>
      <img className="mask-group-icon1" alt="" src="/mask-group2@2x.png" />
      <img className="mask-group-icon2" alt="" src="/mask-group2@2x.png" />
      <img className="mask-group-icon3" alt="" src="/mask-group2@2x.png" />
      <img className="mask-group-icon4" alt="" src="/mask-group2@2x.png" />
      <img className="mask-group-icon5" alt="" src="/mask-group2@2x.png" />
      <div className="filter-parent">
        <div className="filter">Filter</div>
        <img
          className="fluentfilter-24-filled-icon"
          alt=""
          src="/fluentfilter24filled.svg"
        />
      </div>
      <img className="activity-child8" alt="" src="/group-9416.svg" />
    </div>
  );
};

export default Activity;

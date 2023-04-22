import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const navigate = useNavigate();

  const onFluentarrowSort20FilledIconClick = useCallback(() => {
    navigate("/activity");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/activity");
  }, [navigate]);

  return (
    <div className="dashboard">
      <div className="dashboard-child" />
      <img className="dashboard-item" alt="" src="/frame-26.svg" />
      <div className="dashboard-inner" />
      <img
        className="fluentwallet-20-filled-icon"
        alt=""
        src="/fluentwallet20filled4.svg"
      />
      <img
        className="fluentarrow-sort-20-filled-icon"
        alt=""
        src="/fluentarrowsort20filled.svg"
        onClick={onFluentarrowSort20FilledIconClick}
      />
      <img
        className="fluenthome-20-filled-icon"
        alt=""
        src="/fluenthome20filled2.svg"
      />
      <img
        className="fluentpower-20-regular-icon"
        alt=""
        src="/fluentpower20regular4.svg"
      />
      <div className="mask-group-parent">
        <img className="mask-group-icon" alt="" src="/mask-group3@2x.png" />
        <div className="hello-abhijeet">Hello, Abhijeet!</div>
        <div className="abhijeeeeeeet">@abhijeeeeeeet</div>
      </div>
      <img
        className="fluentperson-20-filled-icon"
        alt=""
        src="/fluentperson20filled6.svg"
      />
      <div className="frame-div">
        <div className="fluentsend-20-filled-parent">
          <img
            className="fluentsend-20-filled-icon"
            alt=""
            src="/fluentsend20filled.svg"
          />
          <div className="transfer">Transfer</div>
        </div>
      </div>
      <div className="send-invoice-parent">
        <div className="send-invoice">Send Invoice</div>
        <img
          className="fluentreceipt-20-filled-icon"
          alt=""
          src="/fluentreceipt20filled.svg"
        />
      </div>
      <div className="wallet-balance">Wallet Balance</div>
      <div className="div1">$ 0.00</div>
      <div className="rectangle-div" />
      <img className="dashboard-child1" alt="" src="/frame-12.svg" />
      <div className="banks-accounts">Banks Accounts</div>
      <div className="bank-accounts">03 Bank accounts</div>
      <div className="dashboard-child2" />
      <img className="dashboard-child3" alt="" src="/frame-121.svg" />
      <div className="wallet">Wallet</div>
      <div className="usd-wallet">USD wallet</div>
      <div className="dashboard-child4" />
      <div className="cards">03 cards</div>
      <img className="dashboard-child5" alt="" src="/frame-10.svg" />
      <div className="cards1">Cards</div>
      <div className="dashboard-child6" onClick={onRectangle5Click} />
      <div className="transactions">209 transactions</div>
      <img className="dashboard-child7" alt="" src="/frame-101.svg" />
      <div className="transactions1">Transactions</div>
      <img
        className="fluentalert-20-filled-icon"
        alt=""
        src="/fluentalert20filled3.svg"
      />
      <div className="dashboard-child8" />
      <div className="dashboard-child9" />
      <b className="withdraw">Withdraw</b>
      <b className="add-balance">Add Balance</b>
      <img
        className="undraw-make-it-rain-iwk4-1-icon"
        alt=""
        src="/undraw-make-it-rain-iwk4-1.svg"
      />
      <div className="fluentsend-20-filled-group">
        <img
          className="fluentsend-20-filled-icon1"
          alt=""
          src="/fluentsend20filled1.svg"
        />
        <div className="transfer1">Transfer</div>
      </div>
      <div className="send-invoice-group">
        <div className="send-invoice">Send Invoice</div>
        <img
          className="fluentreceipt-20-filled-icon1"
          alt=""
          src="/fluentreceipt20filled.svg"
        />
      </div>
      <div className="no-transactions-yet">No transactions yet!!!</div>
      <div className="start-making-payments">
        Start making payments through Vep and now you can send Invoice also.
      </div>
      <img className="dashboard-child10" alt="" src="/group-9417.svg" />
    </div>
  );
};

export default Dashboard;

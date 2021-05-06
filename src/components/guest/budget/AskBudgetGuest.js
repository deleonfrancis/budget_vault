import React, { useState } from "react";
import { connect } from "react-redux";
import { setBudgetAmount, setBalance } from "../../../actions/mainActions";
import AskCurrencyGuest from "./AskCurrencyGuest";
import AskTitleGuest from "./AskTitleGuest";
import numeral from "numeral";

function AskBudget({
  guestMain: { title, currency },
  setBudgetAmount,
  setBalance,
}) {
  const [userBudget, setUserBudget] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setBudgetAmount(numeral(userBudget).value());
    setBalance(numeral(userBudget).value());
    // console.log(numeral(userBudget).value());
    setUserBudget("");
  };

  return (
    <div>
      <h4 className="center-align teal-text" style={{ marginBottom: "40px" }}>
        Compose a budget!
      </h4>
      <div className="" style={{width:"80%", margin:"auto"}}>
        <AskTitleGuest />
        <AskCurrencyGuest />
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix teal-text">credit_card</i>
                <input
                  id="guestBudgetInput"
                  type="text"
                  className=""
                  style={{ color: "black" }}
                  value={userBudget}
                  name="guestBudget"
                  onChange={(e) => {
                    setUserBudget(e.target.value);
                  }}
                />
                <label htmlFor="guestBudgetInput">What's your budget?</label>
                <span className="helper-text " data-error="wrong" data-success="right">Example: 300.00</span>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={handleClick}
              disabled={!title || !currency || !userBudget}
            >
              Next
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps, { setBudgetAmount, setBalance })(
  AskBudget
);

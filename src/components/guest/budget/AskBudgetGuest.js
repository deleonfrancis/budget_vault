import React, { useState } from "react";
import { connect } from "react-redux";
import { setBudgetAmount } from "../../../actions/mainActions";
import AskCurrencyGuest from "./AskCurrencyGuest";
import AskTitleGuest from "./AskTitleGuest";
import numeral from "numeral";

function AskBudget({guestMain:{title, currency}, setBudgetAmount}) {
  const [userBudget, setUserBudget] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setBudgetAmount(numeral(userBudget).value());
    // console.log(numeral(userBudget).value());
    setUserBudget("");
  };

  return (
    <div>
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
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
})

export default connect(mapStateToProps, {setBudgetAmount})(AskBudget);

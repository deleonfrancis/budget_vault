import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setBudgetAmount, setBalance, clearBudget, setDateCreated, setBudgetId } from "../../../actions/mainActions";

import AskCurrencyGuest from "./UserAskCurrencyGuest";
import AskTitleGuest from "./UserAskTitleGuest";
import numeral from "numeral";
import { v4 as uuidv4 } from "uuid";


function UserAskBudget({
  guestMain: { title, currency },
  setBudgetAmount,
  setBalance,
}) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearBudget())
    // eslint-disable-next-line
  }, [])

  const [userBudget, setUserBudget] = useState("");
  const dateNow = new Date()
  const budgetID = uuidv4()

  const handleClick = (e) => {
    e.preventDefault();
    setBudgetAmount(numeral(userBudget).value());
    setBalance(numeral(userBudget).value());
    dispatch(setDateCreated(dateNow))
    dispatch(setBudgetId(budgetID))
    setUserBudget("");
  };

  return (
    <div>
      <h5 className="center-align teal-text" style={{ marginTop:"0px", marginBottom: "30px" }}>
        Compose a budget!
      </h5>
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
                <label htmlFor="guestBudgetInput">Amount</label>
                <span className="helper-text" data-error="wrong" data-success="right">
         <span style={{fontStyle:"italic"}}>Example:</span> 300.00
        </span>
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
  UserAskBudget
);

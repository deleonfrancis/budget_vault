import React, { useState, useRef, useEffect } from "react";
import AskCurrency from "./AskCurrency";

function AskBudget() {
  const [guestBudget, setGuestBudget] = useState("");
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <AskCurrency />
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix teal-text">credit_card</i>
              <input
                id="guestBudgetInput"
                type="text"
                className=""
                ref={inputEl}
                style={{ color: "black" }}
              />
              <label htmlFor="guestBudgetInput">What's your budget?</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AskBudget;

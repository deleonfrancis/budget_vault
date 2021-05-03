import React from "react";

function AskCurrency({currency, setCurrency}) {

  return (
    <div className="center-align inputColor">
      <div
        style={{ width: "50%", margin: "auto" }}
        className="input-field col s12 center-align"
      >
        <select name="currency" value={currency} onChange={e=> setCurrency(e.target.value)}>
          <option style={{ color:"red" }} value="" disabled>
            Select Currency
          </option>
          <option value="$">$ Dollars</option>
          <option value="€">€ Euro</option>
          <option value="£">£ Pounds</option>
          <option value="¥">¥ Yen/Yuan</option>
          <option value="₹">₹ Rupee</option>
        </select>
        <label>Choose your currency</label>
      </div>
    </div>
  );
}

export default AskCurrency;

import React from "react";

function AskCurrency() {
  return (
    <div className="center-align inputColor">
      <h4 className="center-align teal-text" style={{ marginBottom: "50px" }}>
        Compose a budget!
      </h4>
      <div
        style={{ width: "50%", margin: "auto" }}
        className="input-field col s12 center-align"
      >
        <select>
          <option style={{ color:"red" }} value="" disabled>
            Currency?
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

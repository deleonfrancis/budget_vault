import React from "react";
import { connect } from "react-redux";
import { setCurrency } from "../../../actions/mainActions";


function AskCurrency({guestMain:{currency}, setCurrency}) {

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

const mapStateToProps = (state => ({
  guestMain: state.guestMain,
}))


export default connect(mapStateToProps, {setCurrency})(AskCurrency);
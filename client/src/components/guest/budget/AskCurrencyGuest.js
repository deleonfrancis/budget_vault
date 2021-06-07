import React from "react";
import { connect } from "react-redux";
import { setCurrency } from "../../../actions/mainActions";
import { useMediaQuery } from "react-responsive";

function AskCurrency({ guestMain: { currency }, setCurrency }) {

  const smallerThanIPad = useMediaQuery({ query: "(max-width: 767px)" });


  return (
    <div style={{marginBottom: "10px"}} className="center-align inputColor">
      <div
        style={!smallerThanIPad?{ width: "50%", margin: "auto" }:{ width: "85%", margin: "auto" }}
        className="col s12 center-align"
      >
        <label>Choose your currency</label>
        <select
          className="browser-default"
          name="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option style={{ color: "red" }} value="" disabled>
            Select Currency
          </option>
          <option value="$">$ Dollars</option>
          <option value="€">€ Euro</option>
          <option value="£">£ Pounds</option>
          <option value="¥">¥ Yen/Yuan</option>
          <option value="₹">₹ Rupee</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps, { setCurrency })(AskCurrency);

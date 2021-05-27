import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import numeral from "numeral";
import {
  setShowModifyBudget,
  addToBudget,
  subtractFromBudget,
} from "../../../actions/mainActions";
import ReactTooltip from 'react-tooltip';


function ModifyBudget({ guestMain: { budget, currency, budgetAmount, balance } }) {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, [budget]);

  // const { balance } = budget;

  const dispatch = useDispatch();

  const [modifyAmount, setModifyAmount] = useState("");

  const handleClose = () => {
    dispatch(setShowModifyBudget(false));
  };

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addToBudget(numeral(modifyAmount).value()));
    setModifyAmount("");
  };

  const handleSubtract = (e) => {
    e.preventDefault()
    dispatch(subtractFromBudget(numeral(modifyAmount).value()));
    setModifyAmount("");
  };

  const disablePlus = !numeral.validate(modifyAmount);
  const disableMinus =
    !numeral.validate(modifyAmount) || modifyAmount >= budgetAmount;

  if (modifyAmount === 0 || NaN) {
    return null;
  }

  return (
    <div
      className="row z-depth-2 yellow lighten-5"
      style={{ padding: "20px", marginBottom: "0px" }}
    >
      <div style={{ marginBottom: "0px" }} className="row">
        <h5 style={{ margin: "0px" }} className="teal-text center-align">
          Modify Budget
        </h5>
        <div className="" style={{width:"70%", margin:"auto"}}>
          <div className="input-field">
            <h4 className="prefix teal-text center-align">{currency}</h4>
            <input
              onChange={(e) => setModifyAmount(e.target.value)}
              value={modifyAmount}
              ref={inputEl}
              id="icon_prefix"
              type="text"
              className="validate"
              placeholder="Enter Amount"
            />
            {/* <label htmlFor="icon_prefix">Modify Budget</label> */}
            <span className="helper-text">
              <span style={{ fontStyle: "italic" }}>Example:</span> 300.00
            </span>
          </div>
        </div>
        <div className="center">
          <a
            onClick={handleAdd}
            style={{ margin: "0px 15px" }}
            href="!#"
            className={
              disablePlus
                ? "btn-floating disabled waves-effect waves-light green "
                : "btn-floating waves-effect waves-light green "
            }
            data-tip="Add"
          >
            <i className="material-icons">add</i>
          </a>
          <a
            onClick={handleSubtract}
            style={{ margin: "0px 15px" }}
            href="!#"
            className={
              disableMinus
                ? "btn-floating disabled waves-effect waves-light red "
                : "btn-floating waves-effect waves-light red "
            }
            data-tip="Subtract"
          >
            <i className="material-icons">remove</i>
          </a>
        </div>
      </div>

      <div style={{ marginBottom: "0px" }} className="grey-text">
        {balance >= 0 && (
          <a
            onClick={handleClose}
            className="grey-text"
            href="#!"
            style={{
              fontStyle: "italic",
              textDecoration: "underline",
            }}
          >
            close
          </a>
        )}
      </div>
      <ReactTooltip place="bottom" effect="solid" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(ModifyBudget);

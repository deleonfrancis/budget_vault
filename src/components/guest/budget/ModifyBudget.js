import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import numeral from "numeral";
import {
  setShowModifyBudget,
  addToBudget,
  subtractFromBudget,
} from "../../../actions/mainActions";

function ModifyBudget({ guestMain: { currency, balance } }) {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const dispatch = useDispatch();

  const [modifyAmount, setModifyAmount] = useState("");

  const handleClose = () => {
    dispatch(setShowModifyBudget(false));
  };

  const handleAdd = () => {
    dispatch(addToBudget(numeral(modifyAmount).value()));
    setModifyAmount("")
  };

  const handleSubtract = () => {
    dispatch(subtractFromBudget(numeral(modifyAmount).value()));
    setModifyAmount("")
  };

  if (modifyAmount === 0 || NaN) {
    return null;
  }

  return (
    <div className="row z-depth-2 yellow lighten-5" style={{ padding: "10px", marginBottom:"0px" }}>
      <div className="input-field" style={{ width:"90%", margin:"7px auto 5px"}}>
        <h4 className="prefix teal-text center-align">{currency}</h4>
        <input
          onChange={(e) => setModifyAmount(e.target.value)}
          value={modifyAmount}
          ref={inputEl}
          id="icon_prefix"
          type="text"
          className="validate"
        />
        <label htmlFor="icon_prefix">Modify Budget</label>
        <span className="helper-text">
          <span style={{ fontStyle: "italic" }}>Example:</span> 300.00
        </span>
      </div>
      <div className="center-align">
        <a onClick={handleAdd} href="#!" style={{ marginRight: "15px" }}>
          <i
            style={{ fontSize: "35px" }}
            className="material-icons prefix green-text"
          >
            add
          </i>
        </a>
        <a onClick={handleSubtract} href="#!">
          <i
            style={{ fontSize: "35px" }}
            className="material-icons prefix red-text"
          >
            remove
          </i>
        </a>
      </div>
      <div className="grey-text">
        {balance >= 0 && (
          <a
            onClick={handleClose}
            className="grey-text"
            href="#!"
            style={{
              marginRight: "15px",
              fontStyle: "italic",
              textDecoration: "underline",
            }}
          >
            close
          </a>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(ModifyBudget);

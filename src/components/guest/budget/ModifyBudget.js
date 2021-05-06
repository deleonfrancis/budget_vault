import React, { useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { setShowModifyBudget } from "../../../actions/mainActions";

function ModifyBudget({ guestMain: { currency, balance } }) {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setShowModifyBudget(false));
  };

  return (
    <div className="row z-depth-2 yellow lighten-5" style={{ padding: "20px" }}>
      <div className="input-field">
        <h4 className="prefix teal-text center-align">{currency}</h4>
        <input ref={inputEl} id="icon_prefix" type="text" className="validate" />
        <label htmlFor="icon_prefix">Modify Budget</label>
        <span className="helper-text" data-error="wrong" data-success="right">
          <span style={{ fontStyle: "italic" }}>Example:</span> 300.00
        </span>
      </div>
      <div className="center-align">
        <a href="#!" style={{ marginRight: "15px" }}>
          <i
            style={{ fontSize: "35px" }}
            className="material-icons prefix green-text"
          >
            add
          </i>
        </a>
        <a href="#!">
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

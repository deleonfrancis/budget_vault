import React from "react";
import { connect, useDispatch } from "react-redux";
import { clearBudget, setGuestBudget } from "../../../actions/mainActions";

function BudgetOptions({
  guestMain: {
    id,
    title,
    currency,
    budgetAmount,
    balance,
    dateUpdated,
    dateCreated,
    expenses,
  },
}) {
  const guestBudget = {
    id,
    title,
    currency,
    budgetAmount,
    balance,
    dateUpdated,
    dateCreated,
    expenses,
  };

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(clearBudget());
  };

  const handleDone = () => {
    dispatch(setGuestBudget(guestBudget));
    dispatch(clearBudget())
  };

  return (
    <div className="">
      <div className="center-align">
        <a
          onClick={handleReset}
          href="#!"
          className="waves-effect waves-light btn-small"
        >
          <i
            className="material-icons left red-text"
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            restart_alt
          </i>
          reset
        </a>
        <a
          onClick={handleDone}
          style={{ marginLeft: "15px" }}
          href="#!"
          className="modal-close waves-effect waves-light btn-small"
        >
          <i
            className="material-icons left"
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            done
          </i>
          done
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(BudgetOptions);

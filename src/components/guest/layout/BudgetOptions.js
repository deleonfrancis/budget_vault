import React from "react";
import { connect, useDispatch } from "react-redux";
import { clearBudget, setGuestBudget } from "../../../actions/mainActions";
import M from "materialize-css";
import ReactTooltip from 'react-tooltip';



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

  const date = new Date()


  const guestBudget = {
    id,
    title,
    currency,
    budgetAmount,
    balance,
    dateUpdated: date,
    dateCreated,
    expenses,
  };

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(clearBudget());
  };

  const handleDone = () => {
    dispatch(setGuestBudget(guestBudget));
    M.toast({html: `New budget. "${guestBudget.title}" has been created.`});
    dispatch(clearBudget())
  };

  return (
    <div className="">
      <div className="center-align">
        <a
          onClick={handleReset}
          style={{ margin: "5px" }}
          href="#!"
          className="waves-effect waves-light btn-floating red lighten-2"
          data-tip="Reset"
        >
          <i
            className="material-icons left"
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            restart_alt
          </i>
          reset
        </a>
        <a
          onClick={handleDone}
          style={{ margin: "10px 25px" }}
          href="#!"
          className="modal-close waves-effect waves-light btn-floating  green lighten-2"
          data-tip="Save and Exit"
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
      <ReactTooltip place="bottom" effect="solid" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(BudgetOptions);

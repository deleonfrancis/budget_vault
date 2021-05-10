import React from "react";
import { connect, useDispatch } from "react-redux";
import { clearBudget, setAndUpdate } from "../../../actions/mainActions";

function EditBudgetOptions({
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

  const handleCancel = () => {
    dispatch(clearBudget());
  };

  const handleDone = () => {
    dispatch(setAndUpdate(guestBudget));
    dispatch(clearBudget())
  };

  return (
    <div className="">
      <div className="center-align">
        <a
          onClick={handleCancel}
          href="#!"
          className="modal-close waves-effect waves-light btn-small "
        >
          <i
            className="material-icons left red-text"
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            close
          </i>
          Cancel
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

export default connect(mapStateToProps)(EditBudgetOptions);

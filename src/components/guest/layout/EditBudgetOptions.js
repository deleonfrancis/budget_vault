import React from "react";
import { connect, useDispatch } from "react-redux";
import { clearBudget, setAndUpdate, onlySetGuestBudget } from "../../../actions/mainActions";
import M from "materialize-css";
import ReactTooltip from 'react-tooltip';


function EditBudgetOptions({
  guestMain: {
    budget,
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

  const handleSave = () => {
    dispatch(setAndUpdate(guestBudget));
    // dispatch(onlySetGuestBudget(guestBudget))

    M.toast({html: `Updates to ${budget.title} has been saved.`});
    // dispatch(clearBudget())
  };
  const handleDone = () => {
    dispatch(setAndUpdate(guestBudget));
    M.toast({html: `${budget.title} has been updated.`});
    dispatch(clearBudget())
  };

  const handleOpenDeleteModal = () => {
    // dispatch(clearBudget())
    dispatch(onlySetGuestBudget(budget))
}

  return (
    <div className="">
      <div className="center-align">
        <a
          onClick={handleCancel}
          style={{ margin: "10px 25px" }}
          href="#!"
          className="modal-close waves-effect waves-light btn-floating orange lighten-3"
          data-tip="Cancel"
        >
          <i
            className="material-icons"
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            close
          </i>
          Cancel
        </a>
        <a
          onClick={handleOpenDeleteModal}
          style={{ margin: "10px 25px" }}
          href="#deleteBudgetOnEditModal"
          className="modal-trigger waves-effect waves-light btn-floating red lighten-2"
          data-tip="Delete"
        >
          <i
            className="material-icons"
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            delete
          </i>
          delete
        </a>
        <a
          onClick={handleSave}
          style={{ margin: "10px 25px" }}
          href="#editBudgetModal"
          className="modal-trigger waves-effect waves-light btn-floating teal lighten-2"
          data-tip="Save"
        >
          <i
            className="material-icons left"
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            save
          </i>
          save
        </a>
        <a
          onClick={handleDone}
          style={{ margin: "10px 25px" }}
          href="#!"
          className="modal-close waves-effect waves-light btn-floating green lighten-2"
          data-tip="Save and Exit"
        >
          <i
            className="material-icons left"
            style={{ fontSize: "25px" }}
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

export default connect(mapStateToProps)(EditBudgetOptions);

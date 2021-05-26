import React from "react";
import { connect, useDispatch } from "react-redux";
import { clearBudget, setAndUpdate, onlySetGuestBudget } from "../../../actions/mainActions";
import M from "materialize-css";


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
          className="modal-close waves-effect waves-light btn-small "
        >
          {/* <i
            className="material-icons left "
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            close
          </i> */}
          Cancel
        </a>
        <a
          onClick={handleOpenDeleteModal}
          style={{ margin: "10px 25px" }}
          href="#deleteBudgetOnEditModal"
          className="modal-trigger waves-effect waves-light btn-small"
        >
          <i
            className="material-icons left red-text"
            style={{ fontSize: "25px", marginRight: "3px" }}
          >
            delete
          </i>
          delete
        </a>
        <a
          onClick={handleDone}
          style={{ margin: "10px 25px" }}
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

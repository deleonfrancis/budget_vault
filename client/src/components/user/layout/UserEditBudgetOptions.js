import React from "react";
import { connect, useDispatch } from "react-redux";
import { clearBudget, setAndUpdate, onlySetUserBudget } from "../../../actions/userMainActions";
import M from "materialize-css";


function EditBudgetOptions({
  userMain: {
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

  const userBudget = {
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
    dispatch(setAndUpdate(userBudget));
    // dispatch(onlySetUserBudget(userBudget))

    M.toast({html: `Updates to ${budget.title} have been saved.`});
    // dispatch(clearBudget())
  };
  const handleDone = () => {
    dispatch(setAndUpdate(userBudget));
    M.toast({html: `${budget.title} has been updated.`});
    dispatch(clearBudget())
  };

  const handleOpenDeleteModal = () => {
    // dispatch(clearBudget())
    dispatch(onlySetUserBudget(budget))
}

  return (
    <div className="">
      <div className="center-align">
        <a
          onClick={handleCancel}
          style={{ margin: "10px 25px" }}
          href="#!"
          className="modal-close tooltipped waves-effect waves-light btn-floating orange lighten-3"
          data-position="bottom" data-tooltip="Cancel & Exit"
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
          href="#userDeleteBudgetOnEditModal"
          className="modal-trigger tooltipped waves-effect waves-light btn-floating red lighten-2"
          data-position="bottom" data-tooltip="Delete"
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
          href="#userEditBudgetModal"
          className="modal-trigger tooltipped waves-effect waves-light btn-floating teal lighten-2"
          data-position="bottom" data-tooltip="Save"
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
          className="modal-close tooltipped waves-effect waves-light btn-floating green lighten-2"
          data-position="bottom" data-tooltip="Save & Exit"
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
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  userMain: state.userMain,
});

export default connect(mapStateToProps)(EditBudgetOptions);

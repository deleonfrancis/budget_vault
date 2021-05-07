import React from "react";
import { connect,useDispatch } from "react-redux";
import { deleteBudget } from "../../../actions/budgetActions";
import { clearBudget } from "../../../actions/mainActions";

function DeleteBudgetModal({ guestMain: { budget } }) {
    const dispatch = useDispatch()
  const { title, id } = budget;

  const handleYesDelete = () =>{

    dispatch(deleteBudget(id))
    dispatch(clearBudget())
  }

  const handleNoDelete = () =>{
    dispatch(clearBudget())
  }

  return (
    <div id="deleteBudgetModal" className="modal" style={modalStyle} >
      <div className="modal-content center-align">
        {title && (
          <h5 className="teal-text">Delete <span style={{fontStyle:"italic"}} className="teal-text">{title}</span> ?</h5>
        )}
        <a onClick={handleYesDelete} style={{margin:"5px"}} href="#!" className="waves-effect waves-light btn-small red modal-close">Yes</a>
      <a onClick={handleNoDelete} style={{margin:"5px"}} href="#!" className="waves-effect waves-light btn-small teal-text grey lighten-5 modal-close">No</a>
      </div>
    </div>
  );
}

const modalStyle = {
    width:"30%",
    height:"auto",
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(DeleteBudgetModal);

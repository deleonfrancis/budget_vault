import React, {useEffect} from "react";
import { connect,useDispatch } from "react-redux";
import { deleteAllBudgets } from "../../../actions/budgetActions";
import { clearBudget } from "../../../actions/mainActions";

import M from "materialize-css";


function DeleteAllBudgetsModal({ guestMain: { budget } }) {

  useEffect(() => {
    const element = document.getElementById('deleteAllBudgetsModal')

    const options = {
        // onOpenStart: () => {
        //   console.log("Open Start");
        // },
        // onOpenEnd: () => {
        //   console.log("Open End");
        // },
        // onCloseStart: () => {
        //   console.log("Close Start");
        // },
        onCloseEnd: () => {
          handleNoDelete()
        },
        // inDuration: 250,
        // outDuration: 250,
        // opacity: 0.5,
        dismissible: true,
        // startingTop: "4%",
        // endingTop: "10%"
      };


  M.Modal.init(element, options )

  // eslint-disable-next-line
  }, [])


    const dispatch = useDispatch()
  const { title, id } = budget;

  const handleYesDeleteAll = () =>{

    // dispatch(deleteBudget(id))
console.log("handleYesDeleteAll clicked!");
    M.toast({html: `All budgets have been deleted.`});
    dispatch(deleteAllBudgets())
    dispatch(clearBudget())
  }

  const handleNoDelete = () =>{
    dispatch(clearBudget())
  }

  return (
    <div id="deleteAllBudgetsModal" className="modal no-autoinit" style={modalStyle} >
      <div className="modal-content center-align">
          <h5 className="teal-text">Delete <span className="red-text">ALL</span> of your budgets?</h5>
        <a onClick={handleYesDeleteAll} style={{margin:"5px"}} href="#!" className="waves-effect waves-light btn-small red modal-close">Yes</a>
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

export default connect(mapStateToProps)(DeleteAllBudgetsModal);

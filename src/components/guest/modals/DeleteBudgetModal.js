import React, {useEffect} from "react";
import { connect,useDispatch } from "react-redux";
import { deleteBudget } from "../../../actions/budgetActions";
import { clearBudget } from "../../../actions/mainActions";

import M from "materialize-css";


function DeleteBudgetModal({ guestMain: { budget } }) {

  useEffect(() => {
    const element = document.getElementById('deleteBudgetModal')

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

  const handleYesDelete = () =>{

    dispatch(deleteBudget(id))
    dispatch(clearBudget())
  }

  const handleNoDelete = () =>{
    dispatch(clearBudget())
  }

  return (
    <div id="deleteBudgetModal" className="modal no-autoinit" style={modalStyle} >
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

import React, {useEffect} from "react";
import { connect,useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { deleteAllBudgets } from "../../../actions/userBudgetActions";
import { clearBudget } from "../../../actions/userMainActions";

import M from "materialize-css";


function UserDeleteAllBudgetsModal({ userMain: { budget } }) {

  useEffect(() => {
    const element = document.getElementById('userDeleteAllBudgetsModal')

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

    // For Screen Size Detection
    const smallerThanIPad = useMediaQuery({ query: "(max-width: 767px)" });

    // Modal Style
  let modalStyle = {}
  if (smallerThanIPad){
    modalStyle = {
      width:"80%",
      height:"auto",}
    } else {
      modalStyle={
        width:"30%",
      height:"auto",
      }
    };


    const dispatch = useDispatch()

  const handleYesDeleteAll = () =>{

    // dispatch(deleteBudget(id))
// console.log("handleYesDeleteAll clicked!");
    M.toast({html: `All budgets have been deleted.`});
    dispatch(deleteAllBudgets())
    dispatch(clearBudget())
  }

  const handleNoDelete = () =>{
    dispatch(clearBudget())
  }

  return (
    <div id="userDeleteAllBudgetsModal" className="modal no-autoinit" style={modalStyle} >
      <div className="modal-content center-align">
          <h5 className="teal-text">Delete <span className="red-text">ALL</span> of your budgets?</h5>
        <a onClick={handleYesDeleteAll} style={{margin:"5px"}} href="#!" className="waves-effect waves-light btn-small red modal-close">Yes</a>
      <a onClick={handleNoDelete} style={{margin:"5px"}} href="#!" className="waves-effect waves-light btn-small teal-text grey lighten-5 modal-close">No</a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userMain: state.userMain,
});

export default connect(mapStateToProps)(UserDeleteAllBudgetsModal);

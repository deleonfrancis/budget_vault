import React from 'react'
import { useDispatch } from 'react-redux'
import numeral from "numeral";
import Moment from "react-moment"
import { clearBudget, onlySetGuestBudget } from '../../../actions/mainActions';

function BudgetItemMobile({budget, theme}) {
const dispatch = useDispatch()

const { title, currency, expenses, dateCreated, balance, budgetAmount } = budget

    if (expenses === undefined){
        return null
    }


const handleOpenEditModal = () => {
    dispatch(clearBudget())
    dispatch(onlySetGuestBudget(budget))
}
const handleOpenDeleteModal = () => {
    dispatch(clearBudget())
    dispatch(onlySetGuestBudget(budget))
}


    return (<div className="col s12 m6">

<div className="card blue-grey darken-1">
        <div className="card-content white-text center-align">
          <a onClick={handleOpenEditModal} className="modal-trigger" href="#editBudgetModal" style={theme==="dark" ? {fontSize:"18px", color: "white", marginBottom:"0px"} : {fontSize:"18px", color: "black", marginBottom:"0px"}}><span style={{marginBottom:"0px"}} className="card-title">{title}</span></a>
          <p style={{fontSize:"12px", marginBottom:"10px"}} className="center-align"><Moment format="MMMM Do, YYYY">{dateCreated}</Moment></p>
          <div className="row">
            <div className="s12"> Budget: {currency}{numeral(budgetAmount).format("0,0.00")}</div>
            {balance>=0?<div className="green-text s12">Balance: {currency}{numeral(balance).format("0,0.00")}</div>:<div className="red-text s12">Balance: {numeral(balance).format("0,0.00")}{currency}</div>}
          </div>
            <div>{expenses.map((exp)=> <div key={exp.id}>{exp.expName} {" "}({budget.currency}{numeral(exp.expAmount).format("0,0.00")})</div>)}</div>
        </div>
        <div className="card-action">
            <div className="row center-align">
                <div className="s12" style={{marginBottom:"10px"}}>
                    <a href="#editBudgetModal" className="modal-trigger" onClick={handleOpenEditModal}><i style={{position:"relative", top:"5px"}} className="material-icons teal-text">edit</i>View/Edit</a>
                </div>
                <div className="s12">
                    <a href="#deleteBudgetModal" className="modal-trigger" onClick={handleOpenDeleteModal}><i style={{position:"relative", top:"5px"}} className="material-icons red-text">delete</i>Delete</a>
                </div>
            </div>
        </div>
      </div>
    </div>      
    )
}

export default BudgetItemMobile


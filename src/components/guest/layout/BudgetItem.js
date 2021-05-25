import React from 'react'
import { useDispatch } from 'react-redux'
import numeral from "numeral";
import Moment from "react-moment"
import { clearBudget, onlySetGuestBudget } from '../../../actions/mainActions';

function BudgetItem({budget, theme}) {
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


    return (
        <tr onClick={handleOpenEditModal} href="#editBudgetModal" className="hoverable modal-trigger budgetTr" style={theme==="dark" ? {borderColor:"teal"} : {}} >
        <td><p style={theme==="dark" ? {fontSize:"18px", color: "white"} : {fontSize:"18px", color: "black"}} href="#editBudgetModal">{title}</p></td>
            <td className="center-align">{currency}{numeral(budgetAmount).format("0,0.00")}</td>
            {balance>=0?<td className="green-text center-align">{currency}{numeral(balance).format("0,0.00")}</td>:<td className="red-text center-align">{numeral(balance).format("0,0.00")}{currency}</td>}
            <td>{expenses.map((exp)=> <div key={exp.id}>{exp.expName} {" "}({budget.currency}{numeral(exp.expAmount).format("0,0.00")})</div>)}</td>
            <td className="center-align"><Moment format="MMMM Do, YYYY">{dateCreated}</Moment></td>
            <td className="center-align"> 
                <a href="#deleteBudgetModal" className="modal-trigger" onClick={handleOpenDeleteModal}><i className="material-icons red-text">delete</i></a>
            </td>
        </tr>
    )
}

export default BudgetItem

import React from 'react'
import Moment from "react-moment"

function BudgetItem({budget, theme}) {

    const { title, currency, expenses, dateCreated, balance, budgetAmount } = budget

    return (
        <tr className="hoverable" style={theme==="dark" ? {borderColor:"teal"} : {}}>
            <td><a className="modal-trigger" style={theme==="dark" ? {fontSize:"18px", color: "white"} : {fontSize:"18px", color: "black"}} href="#editBudgetModal">{title}</a></td>
            <td className="center-align">{currency}{budgetAmount}</td>
            <td className={balance < 0 ? "red-text center-align" : "green-text center-align"}>{currency}{balance}</td>
            <td>{expenses.map((exp)=> <div key={exp.id}>{exp.expName} {" "}({budget.currency}{exp.expAmount})</div>)}</td>
            <td className="center-align"><Moment format="MMMM Do, YYYY">{dateCreated}</Moment></td>
            <td className="center-align"> <a href="#editBudgetModal" className="modal-trigger"><i className="material-icons teal-text">edit</i></a>  <a href="#deleteBudgetModal" className="modal-trigger"><i className="material-icons red-text">delete</i></a></td>
        </tr>
    )
}

export default BudgetItem

import React from 'react'
import Moment from "react-moment"

function BudgetItem({budget, theme}) {

    const { title, currency, expenses, dateCreated, balance} = budget

    return (
        <tr className="hoverable" style={theme==="dark" ? {borderColor:"teal"} : {}}>
            <td><a style={theme==="dark" ? {fontSize:"18px", color: "white"} : {fontSize:"18px", color: "black"}} href="#edit-budget-modal">{title}</a></td>
            <td className="center-align">{currency}{budget.amount}</td>
            <td className={balance < 0 ? "red-text center-align" : "green-text center-align"}>{currency}{balance}</td>
            <td>{expenses.map((exp)=> <div key={exp.id}>{exp.expName} {" "}-{budget.currency}{exp.expAmount}</div>)}</td>
            <td className="center-align"><Moment format="MMMM Do, YYYY">{dateCreated}</Moment></td>
            <td className="center-align"> <a href="#edit-budget-modal" className="modal-trigger"><i className="material-icons teal-text">edit</i></a>  <a href="#delete-budget-modal" className="modal-trigger"><i className="material-icons red-text">delete</i></a></td>
        </tr>
    )
}

export default BudgetItem

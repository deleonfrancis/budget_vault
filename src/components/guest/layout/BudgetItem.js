import React from 'react'

function BudgetItem({budget, theme}) {

    const { title, currency, expenses, dateCreated, balance} = budget

    return (
        <tr className="hoverable" style={theme==="dark" ? {fontSize:"20px", borderColor:"teal"} : {fontSize:"20px"}}>
            <td style={{fontSize:"18px"}}>{title}</td> 
            <td className="center-align">{currency}{budget.amount}</td>
            <td className={balance < 0 ? "red-text center-align" : "green-text center-align"}>{currency}{balance}</td>
            <td>{expenses.map((exp)=> <div key={exp.id}>{exp.expName} {" "}-{budget.currency}{exp.expAmount}</div>)}</td>
            <td className="center-align">{dateCreated}</td>
            <td className="center-align"><i className="material-icons red-text">delete</i></td>
        </tr>
    )
}

export default BudgetItem

// fontSize:"20px", borderColor:"teal"

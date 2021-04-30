import React from 'react'

function BudgetItem({budget}) {

    const { title, currency, expenses, dateCreated, balance} = budget

    return (
        <tr className="hoverable">
            <td style={{fontSize:"18px"}}>{title}</td> 
            <td>{currency}{budget.amount}</td>
            <td className={balance < 0 ? "red-text" : "green-text"}>{currency}{balance}</td>
            <td>{expenses.map((exp)=> <div key={exp.id}>{exp.expName} {" "}-{budget.currency}{exp.expAmount}</div>)}</td>
            <td>{dateCreated}</td>
            <td><i className="material-icons red-text">delete</i></td>
          </tr>
    )
}

export default BudgetItem

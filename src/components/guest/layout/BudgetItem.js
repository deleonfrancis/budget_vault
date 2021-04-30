import React from 'react'

function BudgetItem({budget}) {
    return (
        <tr className="hoverable">
            <td>{budget.title}</td> 
            <td>{budget.currency}{budget.amount}</td>
            <td>{budget.expenses.map((exp)=> <div key={exp.id}>{exp.expName} -{budget.currency}{exp.expAmount}</div>)}</td>
            <td>{budget.dateCreated}</td>
            <td><i className="material-icons red-text center">delete</i></td>
          </tr>
    )
}

export default BudgetItem

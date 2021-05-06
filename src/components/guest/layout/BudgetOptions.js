import React from 'react'

function BudgetOptions() {
    return (
        <div className="right">
            <div style={{}} className="col s6">
                <a href="#!" className="">
                    <i style={{fontSize:"40px"}} className="material-icons center-align red-text">restart_alt</i>
                    <p style={{ marginTop: "0%", marginBottom:"0%" }} className="center-align black-text">Restart</p>
                </a>
            </div>
            <div style={{paddingRight:"0%"}} className="col s6">
                <a href="#!" className="">
                    <i style={{fontSize:"40px"}} className="material-icons center-align green-text lighten-3">save</i>
                    <p style={{marginTop: "0%", marginBottom:"0%" }} className="center-align black-text">Save</p>
                </a>
            </div>
        </div>
    )
}

export default BudgetOptions

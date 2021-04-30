import React from 'react'

function DeleteBudgetModal() {
    return (
        <div id="deleteBudgetModal" className="modal" style={modalStyle}>
        <div className="modal-content">
            <h4>Delete Budget?</h4>
        </div>
    </div>
    )
}

const modalStyle = {
    width:"50%",
    height:"30%"
}

export default DeleteBudgetModal

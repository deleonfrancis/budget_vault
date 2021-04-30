import React from 'react'

function EditBudgetModal() {
    return (
        <div id="editBudgetModal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>View/Update a budget!</h4>
            </div>
        </div>
    )
}
const modalStyle = {
    width:"90%",
    height:"100%",
}
export default EditBudgetModal

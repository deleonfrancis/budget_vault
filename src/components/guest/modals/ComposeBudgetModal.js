import React, {useState} from 'react'

function ComposeBudgetModal() {

    const [title, setTitle] = useState("")
    const [currency, setCurrency] = useState("")
    const [amount, setAmount] = useState(0)
    const [balance, setBalance] = useState(amount)
    const [expenses, setExpenses] = useState([])
    const [expName, setExpName] = useState("")
    const [expAmount, setExpAmount] = useState(0)

    return (
        <div id="composeBudget" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Compose a budget!</h4>
            </div>
        </div>
    )
}

const modalStyle = {
    width:"90%",
    height:"100%"
}

export default ComposeBudgetModal

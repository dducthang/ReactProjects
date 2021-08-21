import React from 'react';
import './ExpenseForm.css';
import './NewExpenseLabel.css'

const NewExpenseLabel = (props)=>{
    const displayHandler=(event)=>{
        props.onDisplay(event);
    }
    return (
        <div className="new-expense__aciton">
            <button onClick={displayHandler}>New Expense</button>
        </div>
    )
}

export default NewExpenseLabel 
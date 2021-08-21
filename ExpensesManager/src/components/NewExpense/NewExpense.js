import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import NewExpenseLabel from './NewExpenseLabel';

const NewExpense =(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        props.onAddNewExpense(expenseData);
    }

    const displayNewExpenseForm =(event)=>{
        event.currentTarget.closest('.new-expense').classList.toggle('hidden');
        event.currentTarget.closest('.new-expense').previousSibling.classList.toggle('hidden');
    }
    
    const displayNewExpenseLabel=event=>{
        event.currentTarget.closest('.new-expense').classList.toggle('hidden');
        event.currentTarget.closest('.new-expense').nextSibling.classList.toggle('hidden');
    }

    return (
        <div>
            <div className="new-expense hidden">
            <ExpenseForm onDisplay={displayNewExpenseLabel} onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
            <div className = "new-expense">
            <NewExpenseLabel onDisplay={displayNewExpenseForm}/>
            </div>
        </div>   
    )
}

export default NewExpense 
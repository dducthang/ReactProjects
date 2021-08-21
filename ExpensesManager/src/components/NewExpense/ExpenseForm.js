import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredAmount( '')
    setEnteredTitle( '')
    setEnteredDate( '')

    props.onSaveExpenseData(expenseData);
  };

  const displayHandler=event=>{
    event.preventDefault();
    props.onDisplay(event);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-1-1"
            max="2022-12-31"
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className = "new-expense__actions">
        <div>
          <button onClick={displayHandler}>Cancel</button>
        </div>
        <div className="new-expense__action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
      
    </form>
  );
};

export default ExpenseForm;

import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

const INITIAL_EXPENSES = [
  {
    id:'001',
    title: "Car Insurance",
    amount: 123.4,
    date: new Date(2021, 2, 28),
  },
  {
    id:'002',
    title: "Birthday Event",
    amount: 103.226,
    date: new Date(2020, 2, 1),
  },
  {
    id:'003',
    title: "Wife Birthday",
    amount: 226.2,
    date: new Date(2021, 5, 22),
  },
  {
    id:'004',
    title: "Travel",
    amount: 2206.0103,
    date: new Date(2019, 5, 22),
  },
];

function App() {
  const [expenses, setExpenses]=useState(INITIAL_EXPENSES);

  const addNewExpenseHandler=(expense)=>{
    setExpenses(preExpenses=>{
      return [expense,...preExpenses]
    })
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

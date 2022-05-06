import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 4, 1),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2020, 3, 30),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 3, 29),
  },
  {
    id: "e4",
    title: "New Desk(Wooden)",
    amount: 450,
    date: new Date(2022, 3, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // this is also a method to set State of an object when we need to use previous state 
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;

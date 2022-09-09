import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const BASE = [
    {
      id: "e1",
      title: "Computer - Idea Pad Gaming 3",
      amount: 699.99,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Tastiera meccanica",
      amount: 23.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Corsi ",
      amount: 30,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Sigaretta elettronica",
      amount: 75,
      date: new Date(2021, 5, 12),
    },
  ];

  const [baseExpense, setNewExpense] = useState(BASE);

  const addExpenseHandler = (expense) => {
    setNewExpense((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses item={baseExpense} />
    </div>
  );
};

export default App;

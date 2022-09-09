import Card from "../ui/Card";
import ExpensesFilter from "../filter/ExpensesFilter";

import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  //receivedYear prende il valore passato tra parentesi dentro useState
  const [receivedYear, setReceivedYear] = useState("2022");

  const onYearSetHandler = (selectedYear) => {
    setReceivedYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((item) => {
    return item.date.getFullYear().toString() === receivedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultValue={receivedYear}
        onYearSet={onYearSetHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setEditing(false);
  };
  const [isEditing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  };

  const onCancelButton = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancelButton={onCancelButton}
          onDataSave={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

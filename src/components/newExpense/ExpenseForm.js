import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*2 - 
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    */
    /* 3 - 
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    */
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*2 -
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    */
    /* 3 -
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
    */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //2 -setUserInput({
    //  ...userInput,
    //  enteredDate: event.target.value,
    //});
    /* 3 - 
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    */
  };

  const submitHandler = (event) => {
    //Previene il comportamento di default dell'elemento, in questo caso del from submit
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onDataSave(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={enteredAmount}
            step="0.01"
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelButton}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

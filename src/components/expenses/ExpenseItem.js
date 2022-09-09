import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //Destrutturazione dell'array, il primo valore [title] è il valore che ha il title al momento, la seconda [setTitle] invece è la funzione che serve per modificarlo
  //const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;

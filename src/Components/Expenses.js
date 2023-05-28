import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="main-container">
      <div className="expense-date">{props.expenseDate}</div>
      <div className="expense-description">{props.expenseName}</div>
      <div className="expense-price">{props.expensePrice}</div>
    </div>
  );
}

export default Expenses;

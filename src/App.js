import "./App.css";
import Expenses from "./Components/Expenses";

function App() {
  const totalExpenses = [
    {
      expenseDate: new Date(2023, 2, 4),
      expenseName: "insurance",
      expensePrice: "34",
    },
    {
      expenseDate: new Date(2021, 2, 9),
      expenseName: "gas",
      expensePrice: "200",
    },
    {
      expenseDate: new Date(2021, 5, 4),
      expenseName: "groceries",
      expensePrice: "48,9",
    },
  ];

  return (
    <div>
      <Expenses
        expenseDate={totalExpenses[0].expenseDate.toISOString()}
        expenseName={totalExpenses[0].expenseName}
        expensePrice={totalExpenses[0].expensePrice}
      ></Expenses>
      <Expenses
        expenseDate={totalExpenses[1].expenseDate.toISOString()}
        expenseName={totalExpenses[1].expenseName}
        expensePrice={totalExpenses[1].expensePrice}
      ></Expenses>
    </div>
  );
}

export default App;

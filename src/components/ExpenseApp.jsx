import { useEffect, useState } from "react";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    console.log(formValues);

    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };

  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transactions.map((t) => {
      t.theType === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className="container">
      <OverviewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransactionComponent transactions={transactions}  />
    </section>
  );
};

export default ExpenseApp;

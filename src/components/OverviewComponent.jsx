import { useState } from "react";
import FormTransaction from "./FormTransaction";

const OverviewComponent = ({ income, expense, addTransaction }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p className="balance">💳 Balance: {income - expense}$</p>
        <button
          className={`btn ${show ? "cancel" : "add"}`}
          onClick={() => setShow(!show)}
        >
          {show ? "Cancel" : "Add"}
        </button>
      </div>
      {show && (
        <FormTransaction addTransaction={addTransaction} setShow={setShow} />
      )}
      <div className="resultSection">
        <div className="expenseBox">
          Expense <span style={{ color: "red " }}>{expense}$</span>
        </div>
        <div className="expenseBox">
          Income <span>{income}$</span>{" "}
        </div>
      </div>
    </>
  );
};

export default OverviewComponent;

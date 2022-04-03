import { useState } from "react";

const FormTransaction = ({ addTransaction, setShow }) => {
  const [formValues, setformValues] = useState({
    theType: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
      />
      <div className="radios">
        <input
          type="radio"
          value="expense"
          name="theType"
          onChange={changeHandler}
          checked={formValues.theType === "expense"}
          id="expense"
          className="radioExpense"
        />
        <label htmlFor="expense">Expense</label>

        <input
          type="radio"
          value="income"
          name="theType"
          onChange={changeHandler}
          checked={formValues.theType === "income"}
          className="radioIncome"
          id="income"
        />
        <label htmlFor="income">income</label>
      </div>
      <button className=" btn transaction " type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default FormTransaction;

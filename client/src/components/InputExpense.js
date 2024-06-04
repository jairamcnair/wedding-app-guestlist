import React from "react";
import { Fragment, useState } from "react";

function InputExpense() {
  const [expense_checked, setExpenseChecked] = useState("no");
  const [expense_date, setExpenseDate] = useState("");
  const [expense_name, setExpenseName] = useState("");
  const [expense_cost, setExpenseCost] = useState("0");

 
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        expense_checked,
        expense_date,
        expense_name,
        expense_cost,
      };

      const response = await fetch("http://localhost:5002/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(body);
      window.location = "/expensetracker";
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <Fragment>
      <form
        className="d-flex mt-5 w-100 border border-primary"
        onSubmit={onSubmitForm}
      >
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th> Checkbox </th>
              <th> Date </th>
              <th> Expense Item </th>
              <th> Cost </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">
                <input type="checkbox" className="form-control w-75" value={expense_checked} onChange={(e) => {setExpenseChecked(e.target.checked)}}/>
              </td>
              <td>
                <input type="date" className="form-control w-75" value={expense_date} onChange={(e) => setExpenseDate(e.target.value)}/>
              </td>
              <td>
                <input type="text" className="form-control w-75" value={expense_name} onChange={(e) => setExpenseName(e.target.value)}/>
              </td>
              <td className="input-group-prepend">
                <label className="input-group-text">$</label>
                <input type="number" className="form-control w-75" value={expense_cost} onChange={(e) => setExpenseCost(e.target.value)}/>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success ml-5"> Add </button>
      </form>
    </Fragment>
  );
}

export default InputExpense;

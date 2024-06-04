import React from "react";
import { Fragment, useEffect, useState } from "react";
import "./components.css";
import InputExpense from "./InputExpense";

const EditExpense = ({expense}) =>{
    const [expenses, setExpenses] = useState([]);
    const [expense_checked, setExpenseChecked] = useState(expense.expense_checked);
    const [expense_date, setExpenseDate] = useState(expense.expense_date);
    const [expense_name, setExpenseName] = useState(expense.expense_name);
    const [expense_cost, setExpenseCost] = useState(expense.expense_cost);

    const updateExpense = async (e) => {
        e.preventDefault();
    
        try {
          const body = {expense_checked, expense_date, expense_name, expense_cost};
          const response = await fetch(
            `http://localhost:5002/expenses/${expense.expense_id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            }
          );
          window.location = "/expensetracker";
        } catch (err) {
          console.error(err.message);
        }
    };

    function setEverything() {
        setExpenseChecked(expense.expense_checked);
        setExpenseDate(expense.expense_date);
        setExpenseName(expense.expense_name);
        setExpenseCost(expense.expense_cost);
    };

    return(
      <Fragment>
        <button type="button"className="btn btn-warning m-3" data-toggle="modal"data-target={`#id${expense.expense_id}`}>Edit</button>

        <div className="modal" data-backdrop="static" id={`id${expense.expense_id}`}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header ">
                <h4 className="modal-title">Edit Expense</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
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
                        <input type="checkbox" id={expense.expense_id} className="form-control w-75" value={expense_checked} onChange={(e) => setExpenseChecked(e.target.checked)}/>
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
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => {updateExpense(e)}}> Edit </button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )


}
export default EditExpense;
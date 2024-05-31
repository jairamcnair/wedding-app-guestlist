import React from "react";
import { Fragment, useEffect, useState } from "react";
import "./components.css";
import InputExpense from "./InputExpense";
import EditExpense from "./EditExpense";


const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  
  const getExpenses = async () => {
    try {
      const response = await fetch(`http://localhost:5002/expenses`);
      const jsonData = await response.json();
      setExpenses(jsonData);
      //console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const deleteExpense = async (id) => {
    try {
      const deleteExpense = await fetch(`http://localhost:5002/expenses/${id}`, {
        method: "DELETE",
      });
      setExpenses(expenses.filter((expense) => expense.expense_id !== id));
      window.location="/expensetracker";
    } catch (err) {
      console.error(err.message);
    }
  };
  

  return (
    <Fragment>
        <h1> Expense Tracker + Checklist </h1>
        <table className="table mt-5 text-center">

          <thead>
            <tr>
              <td>Checklist</td>
              <td>Date</td>
              <td>Expense Name</td>
              <td>Cost</td>
              <td>Edit</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
          {expenses.map((expense) => (
            <tr key={expense.expense_id}>
              <td className="align-middle">{expense.expense_checked}</td>
              <td className="align-middle">{expense.expense_date}</td>
              <td className="align-middle">{expense.expense_name}</td>
              <td className="align-middle">{expense.expense_cost}</td>
              <td className="align-middle"><EditExpense expense={expense}/></td>
              <td className="align-middle"><button className="btn btn-danger" onClick={() => deleteExpense(expense.expense_id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>




        <button type="button"className="btn btn-primary m-3"data-toggle="modal"data-target="#myModal">+</button>

          <div className="modal" id="myModal">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header ">
                  <h4 className="modal-title">Add Expense</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body"><InputExpense /></div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  );
  
};
export default ExpenseTracker;

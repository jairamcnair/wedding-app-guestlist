import React, { Fragment, useState } from "react";
import "./App.css";
//import { Router, Routes, Route, Link, HashRouter, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// components
import InputGuest from "./components/InputGuest";
import ListGuests from "./components/ListGuests";
import ListGuests2 from "./components/ListGuests2";
import PrintGuests from "./components/PrintGuests";
import PrintLabels from "./components/PrintLabels";
import ExpenseTracker from "./components/ExpenseTracker";
import Callback from "./components/Callback.js";

//parent of the 
function App(){
  return (
    <Router>
      <div>
        <div className="header d-flex justify-content-end border border-primary w-100">
          <div className="m-4">
            </div>
            <div className="m-4">
              <button className="btn btn-light border border-primary w"><Link to="/" className="link">Guest List</Link></button>
            </div>
            <div className="m-4">
              <button className="btn btn-light border border-primary w"><Link to="/printguests" className="link">Print Guests Information</Link></button>
            </div>
            <div className="m-4">
              <button className="btn btn-light border border-primary w"><Link to="/printlabels" className="link">Print Address Labels</Link></button>
            </div>
            <div className="m-4">
              <button className="btn btn-light border border-primary w"><Link to="/expensetracker" className="link">Expense Tracker + Checklist</Link></button>
            </div>
        </div>

      </div>

      <Routes>
        <Route path='/' element={<ListGuests2 />} />
        <Route path='/printguests' element={<PrintGuests />} />
        <Route path='/expensetracker' element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}


export default App;
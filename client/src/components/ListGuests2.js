import React from "react";
import { Fragment, useEffect, useState } from "react";
//import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import EditGuest from "./EditGuest";
import InputGuest from "./InputGuest";
import PrintGuests from "./PrintGuests";
import "./components.css";

const ListGuests2 = () => {
  const [guests, setGuests] = useState([]);
  const getGuests = async () => {
    try {
      const response = await fetch(`http://localhost:5001/guests`);
      const jsonData = await response.json();
      setGuests(jsonData);
      //console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getGuests();
  }, []);

  //source: https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
  guests.sort(function (a, b) {
    if (a.guest_name < b.guest_name) {
      return -1;
    }
    if (a.guest_name > b.guest_name) {
      return 1;
    }
    return 0;
  });

  return (
    <Fragment>
      
    <div className="d-flex w-100">
      <div className="main w-75 border border-primary">

        <div className="grid-container">
          {guests.map((guest) => (
            <div key={guest.guest_id} className="grid-item d-flex">
              <EditGuest guest={guest}/>
            </div>
          ))}
        </div>

        <div className="add-guest-container">
          <button type="button"className="btn btn-primary m-3"data-toggle="modal"data-target="#myModal">+</button>

          <div className="modal" id="myModal">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header ">
                  <h4 className="modal-title">Add Guest Group</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body"><InputGuest /></div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main w-25 border border-primary text-center">
        <h3 className="display-4"> Tips... </h3>
        <ul className="list-group">
          <li className="list-group-item"> You need addresses for save the dates, invitations, thank you cards, and more </li>
          <li className="list-group-item"> Send out all of your invites at the same time </li>
          <li className="list-group-item"> Get addresses from </li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  );
  
};
export default ListGuests2;

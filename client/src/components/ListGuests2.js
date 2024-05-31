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
        <div className="inner-main text-center">
          <h3 className="display-4"> Shopping List </h3>
          <ul className="list-group">
            <li className="list-group-item"> Stamps - necessary</li>
            <li className="list-group-item"> Envelopes - necessary</li>
            <li className="list-group-item"> Invitations -necessary </li>
            <li className="list-group-item"> RSVP Card - not necessary, but recommended </li>
            <li className="list-group-item"> Guest Address Labels - not necessary, but handwriting is a lot</li>
            <li className="list-group-item"> RSVP Return Address Labels - not necessary, but handwriting is a lot</li>
            <li className="list-group-item"> Decor - not necessary, but adds character<br/>...wax seals, glitter, gold foil flakes, etc. </li>
          </ul>
        </div>
        <div className="inner-main text-center">
          <h3 className="display-4"> Tips... </h3>
          <ul className="list-group">
            <li className="list-group-item"> You need addresses for save the dates, invitations, thank you cards, and more </li>
            <li className="list-group-item"> With invites, it is smart to put a cap on how many people can come unless you're rich. On the rsvp card, put /5 or /2 so they can fill in the numerator. If it is one person, let them bring a date! If it is a family, account for everyone! </li>
            <li className="list-group-item"> Send all of your invitations out at the same time to save time and so you don't forget anyone </li>
            <li className="list-group-item"> Don't forget stamps...stores like CVS have them in the drawer at the register </li>
            <li className="list-group-item"> <a href="https://www.zazzle.com/c/weddings" target="blank">Zazzle</a> has good prices + quality...</li>
          </ul>
        </div>
        
      </div>
    </div>
    
    </Fragment>
  );
  
};
export default ListGuests2;

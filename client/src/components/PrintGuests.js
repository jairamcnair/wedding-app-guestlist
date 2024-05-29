import React from "react";
import { Fragment, useEffect, useState } from "react";
import EditGuest from "./EditGuest";
import InputGuest from "./InputGuest";
import "./components.css";

const PrintGuests = () => {
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
        <div className="main w-100 border border-primary">

            <div className="grid-container">
                {
                guests.map((guest) => ( 
                <div key={guest.guest_id} className="grid-item p-2">
                  <h6>{guest.guest_name}</h6>
                  <h6>{guest.guest_address}</h6>
                  <h6>{guest.guest_phone}</h6>
                  <h6>Guest Count: {guest.guest_count}</h6>
                  <h6>Need Hotel: {guest.guest_needhotel}</h6>
                  <h6>Kings Needed: {guest.guest_kings}</h6>
                  <h6>Queens Needed: {guest.guest_queens}</h6>
                  <h6>RSVP: {guest.guest_rsvp}</h6>
                </div>
                ))}
            </div>
        </div>
    </div>
    </Fragment>
  );
  
};
export default PrintGuests;

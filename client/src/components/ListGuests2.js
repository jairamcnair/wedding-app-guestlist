import React from "react";
import { Fragment, useEffect, useState } from "react";
import EditGuest from "./EditGuest";
import InputGuest from "./InputGuest";
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



  return (
    <Fragment>
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
    </Fragment>
  );
  
};
export default ListGuests2;

import React from "react";
import { Fragment, useEffect, useState } from "react";
import EditGuest from "./EditGuest";
import InputGuest from "./InputGuest";
import "./components.css";

const ListGuests2 = () => {
  const [guests, setGuests] = useState([]);

  /*const deleteGuest = async (id) => {
    try {
      const deleteGuest = await fetch(`http://localhost:5001/guests/${id}`, {
        method: "DELETE",
      });
      setGuests(guests.filter((guest) => guest.guest_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };*/

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


  function booleanHandler(param) {
    if (param === "true") {
      return "yes";
    } else if (param === "false") {
      return "no";
    }
  }

  //console.log(guests);

  const displayGuests = (param) => {

    /*guests.forEach(guest => {
      return(
        <div key={guest.guest_id}> 
          <EditGuest guest={guest}/>
        </div>
      )
    })*/

    /*for(let i = 0; i < param.length; i++){
      return(
        <div key={param[i].guest_id}> 
          <EditGuest guest={param[i]}/>
        </div>
      )
    }*/

    //console.log(guests)
    /*guests.map((guest) => (
      <div key={guest.guest_id} className="grid-item">
            <EditGuest guest={guest} /> 
      </div>
    ))*/
  }

  return (
    <Fragment>
      <div className="grid-container">

        {guests.map((guest) => (
          <div key={guest.guest_id} className="grid-item">
            <EditGuest guest={guest} /> 
          </div>
        ))}
      </div>

      <div className="add-guest-container">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
        >
          +
        </button>

        <div className="modal" id="myModal">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header ">
                <h4 className="modal-title ">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <InputGuest />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ListGuests2;

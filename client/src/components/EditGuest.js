import React from "react";
import { Fragment, useEffect, useState } from "react";
import ListGuests from "./ListGuests";

const EditGuest = ({ guest }) => {
  const [guest_name, setGuestName] = useState(guest.guest_name);
  const [guest_address, setGuestAddress] = useState(guest.guest_address);
  const [guest_phone, setGuestPhone] = useState(guest.guest_phone);
  const [guest_count, setGuestCount] = useState(guest.guest_count);
  const [guest_needhotel, setGuestNeedhotel] = useState(guest.guest_needhotel);
  const [guest_kings, setGuestKings] = useState(guest.guest_kings);
  const [guest_queens, setGuestQueens] = useState(guest.guest_queens);
  const [guest_rsvp, setGuestRsvp] = useState(guest.guest_rsvp);
  
  
  try{
    /*console.log(guest);
    console.log(guest.guest_id);
    console.log(guest.guest_needhotel);*/
  
    if(guest.guest_needhotel === "true" && document.getElementById(guest.guest_id+"nh") !== null){
      console.log(guest.guest_id+"nh" + " true");
      document.getElementById(guest.guest_id+"nh").checked = true;
    }
    if(guest.guest_needhotel === "false" && document.getElementById(guest.guest_id+"nh") !== null){
      console.log(guest.guest_id+"nh" + " false");
      document.getElementById(guest.guest_id+"nh").checked = false;
    }

    if(guest.guest_rsvp === "true" && document.getElementById(guest.guest_id+"rsvp") !== null){
      console.log(guest.guest_id+"rsvp" + " true");
      document.getElementById(guest.guest_id+"rsvp").checked = true;
    }
    if(guest.guest_rsvp === "false" && document.getElementById(guest.guest_id+"rsvp") !== null){
      console.log(guest.guest_id+"rsvp" + " false");
      document.getElementById(guest.guest_id+"rsvp").checked = false;
    }


    //console.log(guests.key);
    //const cbs = document.querySelectorAll(".needhotel-checkbox");
    /*for(let i = 0; i < cbs.length; ++i){
      console.log(cbs[i]);
      let id = cbs[i].id;
      console.log(id);
      if(guest_needhotel === "true"){
        console.log("true");
        console.log(cbs[i]);
        cbs[i].checked = true;
      }
      if(guest_needhotel === "false"){
        console.log("false");
        console.log(cbs[i]);
        cbs[i].checked = false;
      }
    }*/
  }
  catch(err){
    console.error(err.message);
  }

  /*if(guest_needhotel === "true"){
    console.log("true")
  }*/

  /*console.log(guest.guest_id);
  console.log(guest.guest_needhotel);*/
  /*let value = document.getElementById(guest.guest_id);
  console.log(document.getElementById(guest.guest_id));*/
  /*if(value!=='""' || value!=="null"){
    console.log("yo")
    console.log(document.getElementById(guest.guest_id));
    //document.getElementById(guest.guest_id).checked = true;

  }*/
 
  /*const updateGuest = async(guest_name, guest_address, guest_phone, guest_count, guest_needhotel, guest_kings, guest_queens, guest_rsvp) => {
    e.preventDefault();
    try {
      const body = {
        guest_name,
        guest_address,
        guest_phone,
        guest_count,
        guest_needhotel,
        guest_kings,
        guest_queens,
        guest_rsvp
      };
      const response = await fetch(
        `http://localhost:5001/guests/${guest.guest_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application:json" },
          body: JSON.stringify(body),
        }
      );

      window.location("/");
    } catch (err) {
      console.error(err.message);
    }
};*/
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning w-25"
        data-toggle="modal"
        data-target={`#id${guest.guest_id}`}
      >
        {guest.guest_name} {/* EDIT */}
      </button>
      <div className="modal" id={`id${guest.guest_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Guest</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="w-100 p-3">
                <div className="d-flex-column mt-3 w-100">
                  <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Name </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      value={guest_name}
                      onChange={(e) => {
                        setGuestName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex mt-3 w-100">
                  <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Address </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      value={guest_address}
                      onChange={(e) => setGuestAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="d-flex mt-3 w-100">
                  <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Phone </label>
                    <input
                      type="text"
                      className="form-control w-75"
                      value={guest_phone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="d-flex mt-3 w-100">
                  <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25">
                      {" "}
                      Guest Count{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control w-75"
                      value={guest_count}
                      onChange={(e) => setGuestCount(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="w-100 p-3">
                <div className="d-flex mt-3 w-100">
                  <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25">
                      {" "}
                      Need Hotel{" "}
                    </label>
                    <input
                      id={guest.guest_id + "nh"}
                      type="checkbox"
                      className="form-control w-75 needhotel-checkbox"
                      onChange={(e) => setGuestNeedhotel(e.target.checked)}
                    />
                  </div>
                </div>
                <div className="d-flex mt-3 w-100">
                  <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Kings </label>
                    <input
                      type="number"
                      className="form-control w-75"
                      value={guest_kings}
                      onChange={(e) => setGuestKings(e.target.value)}
                    />
                  </div>
                </div>
                <div className="d-flex mt-3 w-100">
                  <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25">
                      {" "}
                      Dbl. Queens{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control w-75"
                      value={guest_queens}
                      onChange={(e) => setGuestQueens(e.target.value)}
                    />
                </div>
                </div>
                <div className="d-flex mt-3 w-100">
                  <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> RSVP Sent </label>
                    <input
                      type="checkbox"
                      id={guest.guest_id + "rsvp"}
                      className="form-control w-75"
                      value={guest_rsvp}
                      onChange={(e) => setGuestRsvp(e.target.checked)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
            <button 
                type="button" 
                className="btn btn-warning" 
                data-dismiss="modal"
                //onClick={() => {updateGuest(guest.guest_name, guest.guest_address, guest.guest_count, guest.guest_needhotel, guest.guest_kings, guest.guest_queens, guest.guest_rsvp)}}
            >
                Edit
              </button>
              <button 
                type="button" 
                className="btn btn-danger" 
                data-dismiss="modal"
                onClick={() => {
                    /*setGuestName(guest.guest_name);
                    setGuestAddress(guest.guest_address);
                    setGuestCount(guest.guest_count);
                    setGuestNeedhotel(guest.guest_needhotel);
                    setGuestKings(guest.guest_kings);
                    setGuestQueens(guest.guest_queens);
                    setGuestRsvp(guest.guest_rsvp)*/
                }}
            >
                Close Without Saving
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default EditGuest;

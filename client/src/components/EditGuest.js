import React from "react";
import { Fragment, useEffect, useState } from "react";
import "./components.css";



// solution: the checkboxes didn't work because of the code that shows a checked or unchecked checkbox when the page loads
// every single change results in a page re-render

const EditGuest = ({ guest, hotel, guest_id}) => {

  const [guests, setGuests] = useState([]);
  

  /*function getData(){
	    //console.log(guest_id + guest.guest_needhotel);
      
      //checkbox.checked = guest.guest_needhotel;
      const checkboxes = document.querySelectorAll(".ckbxnh");
	    for(let i = 0; i < checkboxes.length; i++){
        //console.log(checkboxes[i].id);
        console.log(checkboxes[i].value)
        let value = checkboxes[i].value;
        checkboxes[i].checked = value;
	  }
  }
  getData();*/

  const deleteGuest = async (id) => {
    try {
      const deleteGuest = await fetch(`http://localhost:5001/guests/${id}`, {
        method: "DELETE",
      });
      setGuests(guests.filter((guest) => guest.guest_id !== id));
      window.location="/";
    } catch (err) {
      console.error(err.message);
    }
  };

  /*const getGuests = async () => {
    try {
      const response = await fetch(`http://localhost:5001/guests`);
      const jsonData = await response.json();
      setGuests(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getGuests();
  }, []);*/

  const [guest_name, setGuestName] = useState(guest.guest_name);
  const [guest_address, setGuestAddress] = useState(guest.guest_address);
  const [guest_phone, setGuestPhone] = useState(guest.guest_phone);
  const [guest_count, setGuestCount] = useState(guest.guest_count);
  const [guest_needhotel, setGuestNeedhotel] = useState(guest.guest_needhotel);
  const [guest_kings, setGuestKings] = useState(guest.guest_kings);
  const [guest_queens, setGuestQueens] = useState(guest.guest_queens);
  const [guest_rsvp, setGuestRsvp] = useState(guest.guest_rsvp);


  //access the element, set the corresponding checked state

  // guest is an object containing the name, addres, etc...so pass that to the updateGuest function
  const updateGuest = async (e) => {
    e.preventDefault();

    try {
      const body = {guest_name,guest_address,guest_phone,guest_count,guest_needhotel,guest_kings,guest_queens,guest_rsvp,};
      const response = await fetch(
        `http://localhost:5001/guests/${guest.guest_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  function setEverything() {
    setGuestName(guest.guest_name);
    setGuestAddress(guest.guest_address);
    setGuestCount(guest.guest_count);
    setGuestNeedhotel(guest.guest_needhotel);
    setGuestKings(guest.guest_kings);
    setGuestQueens(guest.guest_queens);
    setGuestRsvp(guest.guest_rsvp);
  }

 

 

  return (
    <Fragment>
      <button type="button" className="btn btn-primary w-100 edit-name-btn" data-toggle="modal" data-target={`#id${guest.guest_id}`}>
        {guest.guest_name}
      </button>

      <div className="modal" data-backdrop="static" id={`id${guest.guest_id}`}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">

                <div className="modal-header">
                  <h4 className="modal-title">Edit Guest</h4>
                  <button type="button" className="close" data-dismiss="modal" onClick={() => setEverything()}> &times; </button>
                </div>

                <div className="modal-body">

                  <div className="w-100 p-3">

                      <div className="input-group-prepend mt-2">
                        <label className="input-group-text w-25"> Name </label>
                        <input type="text" className="form-control w-75" value={guest_name} onChange={(e) => {setGuestName(e.target.value);}}/>
                      </div>

                      <div className="input-group-prepend mt-2">
                        <label className="input-group-text w-25 text-right"> Address </label>
                        <input type="text" className="form-control w-75" value={guest_address} onChange={(e) => {setGuestAddress(e.target.value);}}/>
                      </div>

                      <div className="input-group-prepend mt-2">
                        <label className="input-group-text w-25"> Phone </label>
                        <input type="text" className="form-control w-75" value={guest_phone} onChange={(e) => {setGuestPhone(e.target.value);}}/>
                      </div>

                      <div className="input-group-prepend mt-2">
                        <label className="input-group-text w-25"> Guest Count </label>
                        <input type="number" className="form-control w-75" value={guest_count} onChange={(e) => {setGuestCount(e.target.value);}}/>
                      </div>

                      <div className="input-group-prepend mt-2">
                        <label className="input-group-text w-25"> Need Hotel </label>
                        <input type="text"  id={guest.guest_id+"nh"} className="form-control w-75 ckbxnh" value={guest_needhotel} onChange={(e) => {setGuestNeedhotel(e.target.value)}}/>
                      </div>

                      <div className="input-group-prepend mt-2">
                        <label className="input-group-text w-25"> Kings </label>
                        <input type="number" className="form-control w-75" value={guest_kings} onChange={(e) => {setGuestKings(e.target.value);}}/>
                      </div>

                      <div className="input-group-prepend mt-2">
                        <label className="input-group-text w-25"> Queens </label>
                        <input type="number" className="form-control w-75" value={guest_queens} onChange={(e) => {setGuestQueens(e.target.value);}}/>
                      </div>

                      <div className="input-group-prepend mt-2">
                        <label className="input-group-text w-25"> RSVP Received </label>
                        <input type="text" id={guest.guest_id + "rsvp"} className="form-control w-75 ckbx" value={guest_rsvp} onChange={(e) => {setGuestRsvp(e.target.value);}}/>
                      </div>

                    {/*
                      <div className="d-flex mt-3 w-100">
                        <button className="btn btn-danger" onClick={() => deleteGuest(guest.guest_id)}> Delete Guest </button>
                      </div>
                    */}
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-danger" onClick={() => deleteGuest(guest.guest_id)}> Delete Guest </button>
                  <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => {updateGuest(e);}}> Edit </button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => {setEverything()}}> Close without saving </button>
                </div>

          </div> {/* className = "modal-content"*/}
        </div> {/* className = "modal-dialog"*/}
      </div> {/* className = "modal"*/}
    </Fragment>
  );
};
export default EditGuest;

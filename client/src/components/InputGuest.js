import React from "react";
import { Fragment, useState } from "react";

function InputGuest() {
  const [guest_name, setGuestName] = useState("");
  const [guest_address, setGuestAddress] = useState("");
  const [guest_phone, setGuestPhone] = useState("");
  const [guest_count, setGuestCount] = useState("");
  const [guest_needhotel, setGuestNeedhotel] = useState("false");
  const [guest_kings, setGuestKings] = useState("");
  const [guest_queens, setGuestQueens] = useState("");
  const [guest_rsvp, setGuestRsvp] = useState("false"); 

  const checkboxInputHandler = async (e) => {
    //console.log(e);
    try {
      console.log(e.checked);
      if(e.checked == "true"){
        guest_needhotel = "yes";
        console.log(guest_needhotel);
      }
      else if(e.checked == "false"){
        guest_needhotel = "no";
        console.log(guest_needhotel);
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  const onSubmitForm = async (e) => {
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
      const response = await fetch("http://localhost:5001/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      //console.log(response);
      window.location="/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5"> Guest List</h1>
      <form className="d-flex mt-5 w-100 border border-primary" onSubmit={onSubmitForm}>
        <div className="w-75 p-3">
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Name </label>
                    <input type="text" className="form-control w-75" value={guest_name} onChange={(e) => {setGuestName(e.target.value);}}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Address </label>
                    <input type="text" className="form-control w-75" value={guest_address} onChange={(e) => setGuestAddress(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Phone </label>
                    <input type="text" className="form-control w-75" value={guest_phone} onChange={(e) => setGuestPhone(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Guest Count </label>
                    <input type="number" className="form-control w-75" value={guest_count} onChange={(e) => setGuestCount(e.target.value)}/>
                </div>
            </div>
        </div>
        
        <div className="w-25 p-3">
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-50"> Need Hotel </label>
                    <input id="needhotel-cb" type="checkbox" className="form-control w-50" value={guest_needhotel} onChange={(e) => setGuestNeedhotel(e.target.checked)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-50"> Kings </label>
                    <input type="number" className="form-control w-50" value={guest_kings} onChange={(e) => setGuestKings(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-50"> Dbl. Queens </label>
                    <input type="number" className="form-control w-50" value={guest_queens} onChange={(e) => setGuestQueens(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-50"> RSVP Sent </label>
                    <input type="checkbox" className="form-control w-50" value={guest_rsvp} onChange={(e) => setGuestRsvp(e.target.checked)}/>
                </div>
            </div>
        </div>
        <button className="btn btn-success"> Add </button>
      </form>
    </Fragment>
  );
}

export default InputGuest;

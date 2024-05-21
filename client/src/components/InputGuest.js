import React from "react";
import { Fragment, useState } from "react";

function InputGuest() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [count, setCount] = useState("");
  const [needhotel, setNeedhotel] = useState("");
  const [kings, setKings] = useState("");
  const [queens, setQueens] = useState("");
  const [rsvp, setRsvp] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        name,
        address,
        phone,
        count,
        needhotel,
        kings,
        queens,
        rsvp,
      };
      const response = await fetch("http://localhost:6000/guests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5"> Guest List</h1>
      <form className="d-flex mt-5 w-75 border border-primary" onSubmit={onSubmitForm}>
        <div className="w-75 p-3">
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Name </label>
                    <input type="text" className="form-control w-75" value={name} onChange={(e) => {setName(e.target.value);}}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Address </label>
                    <input type="text" className="form-control w-75" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Phone </label>
                    <input type="text" className="form-control w-75" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-25"> Guest Count </label>
                    <input type="number" className="form-control w-75" value={count} onChange={(e) => setCount(e.target.value)}/>
                </div>
            </div>
        </div>
        
        <div className="w-25 p-3">
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-50"> Need Hotel </label>
                    <input type="checkbox" className="form-control w-50" value={needhotel} onChange={(e) => setNeedhotel(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-50"> Kings </label>
                    <input type="number" className="form-control w-50" value={kings} onChange={(e) => setKings(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-50"> Dbl. Queens </label>
                    <input type="number" className="form-control w-50" value={queens} onChange={(e) => setQueens(e.target.value)}/>
                </div>
            </div>
            <div className="d-flex mt-3 w-100">
                <div className="input-group-prepend w-100">
                    <label className="input-group-text w-50"> RSVP Sent </label>
                    <input type="checkbox" className="form-control w-50" value={rsvp} onChange={(e) => setRsvp(e.target.value)}/>
                </div>
            </div>
        </div>
        <button className="btn btn-success"> Add </button>
      </form>
    </Fragment>
  );
}

export default InputGuest;

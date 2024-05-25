import React from "react";
import { Fragment, useEffect, useState } from "react";
import './components.css'



const EditGuest = ({ guest }) => {
  const[guests, setGuests] = useState([]);

    const deleteGuest = async (id) => {
        try {
            const deleteGuest = await fetch(`http://localhost:5001/guests/${id}`, {
                method: "DELETE"
            });
            setGuests(guests.filter(guest => guest.guest_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getGuests = async () => {
      try {
          const response = await fetch(`http://localhost:5001/guests`);
          const jsonData = await response.json(); 
          setGuests(jsonData);
      } catch (err) {
          console.error(err.message);
      }
  }

  useEffect(() => {
      getGuests();
  }, []);

  const [guest_name, setGuestName] = useState(guest.guest_name);
  const [guest_address, setGuestAddress] = useState(guest.guest_address);
  const [guest_phone, setGuestPhone] = useState(guest.guest_phone);
  const [guest_count, setGuestCount] = useState(guest.guest_count);
  const [guest_needhotel, setGuestNeedhotel] = useState(guest.guest_needhotel);
  const [guest_kings, setGuestKings] = useState(guest.guest_kings);
  const [guest_queens, setGuestQueens] = useState(guest.guest_queens);
  const [guest_rsvp, setGuestRsvp] = useState(guest.guest_rsvp);

  //console.log(guest.guest_id);
  try {
    if (
      guest.guest_needhotel === "true" &&
      document.getElementById(guest.guest_id + "nh") !== null
    ) {
      document.getElementById(guest.guest_id + "nh").checked = true;
    }
    if (
      guest.guest_needhotel === "false" &&
      document.getElementById(guest.guest_id + "nh") !== null
    ) {
      document.getElementById(guest.guest_id + "nh").checked = false;
    }

    if (
      guest.guest_rsvp === "true" &&
      document.getElementById(guest.guest_id + "rsvp") !== null
    ) {
      document.getElementById(guest.guest_id + "rsvp").checked = true;
    }
    if (
      guest.guest_rsvp === "false" &&
      document.getElementById(guest.guest_id + "rsvp") !== null
    ) {
      document.getElementById(guest.guest_id + "rsvp").checked = false;
    }
  } catch (err) {
    console.error(err.message);
  }

  // guest is an object containing the name, addres, etc...so pass that to the updateGuest function
  const updateGuest = async (e) => {
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
      //console.log(body);
      const response = await fetch(`http://localhost:5001/guests/${guest.guest_id}`,
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
  //console.log("hey");
  return (
    <Fragment>
      
      <button
        type="button"
        className="btn btn-warning w-100 h-100"
        data-toggle="modal"
        data-target={`#id${guest.guest_id}`}
      >
        {guest.guest_name} {/* EDIT */}
      </button>
      <div className="modal" data-backdrop="static" id={`id${guest.guest_id}`} /*onClick={() => setEverything()}*/>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Guest</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setEverything()}
              >
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
                    <label className="input-group-text w-25">Guest Count</label>
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
                    <label className="input-group-text w-25" htmlFor={guest.guest_id + "nh"}>Need Hotel</label>
                    
                    <input
                      id={guest.guest_id + "nh"}
                      type="checkbox"
                      //value={guest_needhotel}
                      className="form-control w-75 h-45"
                      onChange={(e) => setGuestNeedhotel(e.target.checked)}
                      //onClick={console.log("hey")}
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
                      //value={guest_rsvp}
                      onChange={(e) => setGuestRsvp(e.target.checked)}
                    />
                  </div>
                </div>
                <div className="d-flex mt-3 w-100">
                    <button className="btn btn-danger" onClick={() => deleteGuest(guest.guest_id)}> Delete Guest </button>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => {
                  updateGuest(e);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setGuestName(guest.guest_name);
                  setGuestAddress(guest.guest_address);
                  setGuestCount(guest.guest_count);
                  setGuestNeedhotel(guest.guest_needhotel);
                  setGuestKings(guest.guest_kings);
                  setGuestQueens(guest.guest_queens);
                  setGuestRsvp(guest.guest_rsvp);
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

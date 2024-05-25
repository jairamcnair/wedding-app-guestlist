import React from "react";
import { Fragment, useEffect, useState} from "react";
import EditGuest from "./EditGuest";
import './components.css'

const ListGuests2 = () => {
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

    function booleanHandler(param){
        if(param === "true"){
            return "yes"
        }
        else if (param === "false"){
            return "no"
        }
    }

    return(
        <Fragment>
            <div className="grid-container">
                {guests.map(guest => ( 
                    <div key={guest.guest_id} className="grid-item">
                        <EditGuest guest={guest}/>
                    </div>
                ))}
            </div>
            {/*
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th> Your Guest Groups </th>
                    </tr>
                </thead>
                <tbody>
                    {guests.map(guest => (
                        <tr  key={guest.guest_id}>
                            <td> 
                                <EditGuest guest={guest}/>
                                <button className="btn btn-danger" onClick={() => deleteGuest(guest.guest_id)}> Delete </button>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
            */}
        </Fragment>
    )
}
export default ListGuests2;
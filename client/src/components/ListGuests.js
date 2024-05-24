import React from "react";
import { Fragment, useEffect, useState} from "react";
import EditGuest from "./EditGuest";

const ListGuests = () => {
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

    //console.log(guests);

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Address </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {guests.map(guest => (
                        <tr  key={guest.guest_id}>
                            <td> 
                                <EditGuest guest={guest}/> 
                                <button className="btn btn-danger" onClick={() => deleteGuest(guest.guest_id)}> Delete </button>
                            </td>
                            {/*
                            <td> {guest.guest_name} </td>
                            <td> {guest.guest_address} </td>
                            <td> <EditGuest guest={guest}/> </td>
                            <td> <button className="btn btn-danger" onClick={() => deleteGuest(guest.guest_id)}> Delete </button> </td>
                            */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}
export default ListGuests;
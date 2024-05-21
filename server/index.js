const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const pool = require("./db");
// ROUTES

// CREATE GUEST
app.post("/guests", async(req, res) => {
    try {
        const{ guest_name, guest_address, guest_phone, guest_count, guest_needhotel, guest_kings, guest_queens, guest_rsvp } = req.body;
        const newGuest = await pool.query(
            "INSERT INTO guest (guest_name, guest_address, guest_phone, guest_count, guest_needhotel, guest_kings, guest_queens, guest_rsvp) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [guest_name, guest_address, guest_phone, guest_count, guest_needhotel, guest_kings, guest_queens, guest_rsvp]
        );
        res.json(newGuest);
    } catch (err) {
        console.error(err.message);
    }
});


// SELECT ALL GUESTS
app.get("/guests", async(res, req) => {
    try {
        const allGuests = await pool.query("SELECT * from guest");
        res.json(allGuests.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// SELECT GUEST BY ID
app.get("/guests/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const guest = await pool.query("SELECT * FROM guest WHERE guest_id = $1", [ id ]);
        res.json(guest.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// UPDATE GUEST
app.put("/guests/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { guest_name, guest_address, guest_phone, guest_count, guest_needhotel, guest_kings, guest_queens, guest_rsvp} = req.body;
        const updateGuest = await pool.query(
            "UPDATE guest SET guest_name=$1, guest_address=$2, guest_phone=$3, guest_count=$4, guest_needhotel=$5, guest_kings=$6, guest_queens=$7, guest_rsvp=$8 WHERE guest_id=$9",
            [guest_name, guest_address, guest_phone, guest_count, guest_needhotel, guest_kings, guest_queens, guest_rsvp, id]
        );
        res.json("Guest was updated");
    } catch (err) {
        console.error(err.message);
    }
})

// DELETE GUEST
app.delete("/guests/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteGuest = await pool.query("DELETE FROM guest WHERE guest_id = $1", [ id ]);
        res.json("Guest was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})
app.listen(5001, () => {
    console.log("Server has started on port 5001");
})

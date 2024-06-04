const express = require("express");
const app = express();
const app2 = express();
const cors = require("cors");
app.use(cors());
app2.use(cors());
app.use(express.json());
app2.use(express.json());

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
        console.log(req.body);
        res.json(newGuest);
    } catch (err) {
        console.error(err.message);
    }
});

// SELECT ALL GUESTS
app.get("/guests", async(req, res) => {
    try {
        const allGuests = await pool.query("SELECT * FROM guest");
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
        const{ guest_name, guest_address, guest_phone, guest_count, guest_needhotel, guest_kings, guest_queens, guest_rsvp } = req.body;

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



// CREATE EXPENSE
app2.post("/expenses", async(req, res) => {
    try {
        const{ expense_date, expense_name, expense_cost } = req.body;
        const newExpense = await pool.query(
            "INSERT INTO expenses (expense_date, expense_name, expense_cost) VALUES($1, $2, $3) RETURNING *",
            [expense_date, expense_name, expense_cost]
        );
        console.log(req.body);
        res.json(newExpense);
    } catch (err) {
        console.error(err.message);
    }
});
// SELECT ALL EXPENSES
app2.get("/expenses", async(req, res) => {
    try {
        const allExpenses = await pool.query("SELECT * FROM expenses");
        res.json(allExpenses.rows);
    } catch (err) {
        console.error(err.message);
    }
});
// SELECT EXPENSE BY ID
app2.get("/expenses/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const expense = await pool.query("SELECT * FROM expenses WHERE expense_id = $1", [ id ]);
        res.json(expense.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
// UPDATE EXPENSE
app2.put("/expenses/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const{ expense_checked, expense_date, expense_name, expense_cost } = req.body;

        const updateExpense = await pool.query(
            "UPDATE expenses SET expense_date=$1, expense_name=$2, expense_cost=$3 WHERE expense_id=$4",
            [expense_date, expense_name, expense_cost, id]
        );
        res.json("Expense was updated");
    } catch (err) {
        console.error(err.message);
    }
})
// DELETE EXPENSE
app2.delete("/expenses/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteExpense = await pool.query("DELETE FROM expenses WHERE expense_id = $1", [ id ]);
        res.json("Expense was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})


app.listen(5001, () => {
    console.log("Server has started on port 5001");
})

app2.listen(5002, () => {
    console.log("Server has started on port 5002");
})

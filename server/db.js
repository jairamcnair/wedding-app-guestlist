const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Miloiscute3#a",
    host: "localhost",
    port: "5432",
    database: "weddingplanningapp"
});

module.exports = pool;
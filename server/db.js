const Pool = require("pg").Pool;

const pool = new Pool({
    user: "pernuser",
    password: "pernpass",
    host: "postgres",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
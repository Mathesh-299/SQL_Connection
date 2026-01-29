const mysql2 = require("mysql2");


const DB = mysql2.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Mathesh@290905',
    database: process.env.DB_NAME || 'mydb'
})

DB.connect((e) => {
    if (e) {
        console.error('Error connecting to the database:', e);
    } else {
        console.log('Connected to the database.');
    }
})

module.exports = DB;
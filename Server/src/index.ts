import * as path from 'path'

const filePath = path.resolve(__dirname, '../db/test.db')

let sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(filePath);

const query = 'SELECT * FROM users'

db.all(query, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach(row => {
        console.log(row.username)
    });
})

db.close();
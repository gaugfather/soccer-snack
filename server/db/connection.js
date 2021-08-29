const mysql = require('mysql')


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'soccersack',
    password: 's0ccer',
    database: 'soccersnack'
})

connection.connect((err) => {
    if(err) throw err

    console.log('Connected to mysql')
})
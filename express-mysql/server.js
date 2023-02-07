var express = require('express')
var cors = require('cors')
var app = express()


app.use(cors())

// get the client
const mysql = require('mysql2');

var host = 'localhost';
if(process.env.NODE_ENV == 'production')  {
    host = 'mysql-server'
}


// create the connection to database
const connection = mysql.createConnection({
  host: host,
  user: 'root',
  password: '1234',
  database: 'travel'
});

app.get('/attractions', function (req, res, next) {
    connection.query(
  'SELECT * FROM attractions',
  function(err, results, fields) {
    res.json(results);
   
    }
  );


})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})



const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL database connection
const db = mysql.createConnection({
  host: 'test-webapp-sum01-server.mysql.database.azure.com',
  user: 'nzfgourtce',
  password: 'R143P8H3H21BB6DI$',
  database: 'ibmireport',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Create a route to fetch and display records
app.get('/records', (req, res) => {
  db.query('SELECT * FROM ibmimastereport', (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get('/', (req, res) => {
  res.sendFile( __dirname + '/index.html');
});

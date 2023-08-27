const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

// Create a movie
app.post('/api/new-movie', ({ body }, res) => {
  
  const sql = ``;
  const params = [body.movie_name];
  
  db.query(sql, params, (err, result) => {

  });
});

// Read all movies
app.get('/api/movies', (req, res) => {
  const sql = ``;
  
  db.query(sql, (err, rows) => {

  });
});

// Delete a movie
app.delete('/api/movie/:id', (req, res) => {
  const sql = ``;
  const params = [req.params.id];
  
  db.query(sql, params, (err, result) => {

  });
});

// Read list of all reviews and associated movie name using LEFT JOIN
app.get('/api/movie-reviews', (req, res) => {
  const sql = ``;
  db.query(sql, (err, rows) => {

  });
});

// BONUS: Update review name
app.put('/api/review/:id', (req, res) => {
  const sql = ``;
  const params = [req.body.review, req.params.id];

  db.query(sql, params, (err, result) => {

  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();


// Import the Postgres connection
const {connection} = require('./Postgredb.js');
connection(); // Connect to Postgres



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

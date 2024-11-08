const express = require('express');
const app = express();

// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// Import the Postgres connection
const {connection} = require('./Postgredb.js');
connection(); // Connect to Postgres

// Import the image routes
// const imageRoutes = require('./routes/images');



// Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON bodies

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://aswinthulasi007:1234@excisedb.af1xl.mongodb.net/?retryWrites=true&w=majority&appName=ExciseDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// Static file serving for uploaded images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/images', imageRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

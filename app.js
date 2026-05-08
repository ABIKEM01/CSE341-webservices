require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/professional', require('./routes/professional'));
app.use('/contacts', require('./routes/contacts'));


// Start server
const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
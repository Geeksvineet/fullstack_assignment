const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration
app.use(cors({
  origin: ["https://real-trust-flipr-frontend.onrender.com"],
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/subscriptions', require('./routes/subscriptionRoutes'));

// Serve the React app's build files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Catch-all handler for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

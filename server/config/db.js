const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    console.log(process.env.MONGO_URI);
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        console.error('Stack Trace:', error.stack);
        process.exit(1);
    }
};

// Optional: Log database connection status on disconnect
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = connectDB;

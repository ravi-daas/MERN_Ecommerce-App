const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const ErrorHandler = require('./middlewares/errorHandler');
const { connection } = require('./services/connection');

dotenv.config();
const app = express();

// to send req from frontend 
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection();

// Routes
app.use(authRoutes);
app.use(userRoutes);
app.use(ErrorHandler);

// connection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const ErrorHandler = require('./middlewares/errorHandler');
const { connection } = require('./services/connection');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
app.use(cookieParser());

// to send req from frontend 
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection();

// Routes
app.use(authRoutes);
app.use(userRoutes);
app.use(adminRoutes);
app.use(ErrorHandler);

// connection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

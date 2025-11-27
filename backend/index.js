const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Nayems Canvas');
});

// mongo driver url
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.oguoxou.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log('nayems-canvas server is running on port', port);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error', err);
    })
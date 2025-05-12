const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/authRoutes.js')

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

//Import Rotes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,

() => console.log('connected to db!'));

//Middleware
app.use(express.json());
app.use(bodyParser.json());

//Route MiddleWares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server is up and running'));


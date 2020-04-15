const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config({path: __dirname + '/.env'})
const app = express();

mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
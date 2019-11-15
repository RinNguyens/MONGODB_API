const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const db = require('./config/db').Database;

// Database Connection

mongoose.connect(db, {useNewUrlParser : true})
    .then( ()=> {
        console.log('Database Connectd Succesfully');
    })
    .catch((err) => {
        console.log('Unable to connect with the database', err);
    });

// Defining the PORT
const PORT = process.env.PORT || 5000;

// Cors Middleware

app.use(cors());


// Public Directory

// Bodyparser Middleware
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send('Hello Rin chan');
});

const postRouter = require('./routes/apis/post');

app.use('/apis/post', postRouter);
 
app.listen(PORT ,() => {
    console.log('Server started on port',PORT);
})


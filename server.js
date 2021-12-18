'use strict';

const express = require('express');

const app = express();
app.use(express.static('static'));

app.get('/smart-home-keskin', (req,res)=>{
    res.send('hello');
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});
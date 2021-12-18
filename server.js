'use strict';

const express = require('express');
const fs = require('fs')

const app = express();
app.use(express.static('static'));

app.get('/smart-home-keskin', (req,res)=>{

    const content = new Date() + req.hostname+'\n\n'+JSON.stringify(req.body)+'\n\n'

    fs.writeFile('./http.log', content, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })

    res.send('hello');
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});
const express = require('express');

const app = express();

//Routes
app.get('/',(req,res) => {
    res.send('powli');
});

//listening to server

app.listen(3000);

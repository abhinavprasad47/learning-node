const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');

//Import Routes
const postsRoutes = require('./routes/posts');


app.use(express.json());

app.use('/posts',postsRoutes);
//middeware
/*app.use('/posts', () => {
    console.log('this is log');
});*/

//Routes
app.get('/', (req,res) => {
    res.send('powli');
});


//Db connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true },
        () => console.log('connected to DB')
);

//listening to server

app.listen(3000);

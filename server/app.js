const express = require('express');
const mongoose = require('mongoose');


const app = express();

//To get data into json format
app.use(express.json());

//For dotenv
const dotenv = require("dotenv");
dotenv.config();

//Port 
const PORT = process.env.PORT || 5600;

// cors installed because of port to req.
const cors = require('cors');

//use cors
app.use(cors())

//Import Routes
const GamesRoute = require('./routes/route');

//Connect MongoDB
mongoose.connect(process.env.MONGO)
.then(()=>console.log("db connected"))
.catch(err => console.log(err))


app.use('/',GamesRoute);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
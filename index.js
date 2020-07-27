/**
 * Required External Modules
 */
const express = require("express");
const mongoose = require('mongoose');
var cors = require('cors');
const machineRouter = require('./routes/machines');
const podRouter = require('./routes/pods');


/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
mongoose.connect('mongodb://localhost:27017/coffee',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
    if(!err) console.log(`Connected to MongoDatabase coffee`)
    else console.log(err)
})

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cors());


/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.status(200).send("Welcome To Omar Abdo's Inovola NodeJs Task");
  });
app.use('/machines', machineRouter);
app.use('/pods', podRouter);

/**
 * Server Activation
 */
app.listen(port, (err) => {
    if(!err) console.log(`Listening to requests on http://localhost:${port}`);
  });
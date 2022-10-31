const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// const mongoose = require('mongoose');
// const {Schema} = require("mongoose");
// const db = require("./config/db");
// // const Schema = require('mongoose').Schema;
// mongoose.connect('mongodb://localhost/KY9NNE');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// var test = new Vasarlo({name: "Teszt Pista", email: "teszt@teszt.hu", country: "Érd", treeNum: 7});
// test.save(function (err){
//    console.log("wooow");
// });

// Load routing
require('./routes/route')(app);

const server = app.listen(3000, function () {
    console.log("On : 3000");
});
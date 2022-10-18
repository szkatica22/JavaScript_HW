const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(express.static('static'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load routing
require('./routes/route')(app);

var server = app.listen(3000, function () {
    console.log("On : 3000");
});
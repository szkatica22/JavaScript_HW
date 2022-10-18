var express = require('express');
var app = express();

app.use(express.static('static'));

// Load routing
require('./routes/route')(app);

var server = app.listen(3000, function () {
    console.log("On : 3000");
});
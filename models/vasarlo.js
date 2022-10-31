const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Vasarlo = db.model("customers", {
    name: String,
    email: String,
    country: String,
    treeNum: Number,
});

module.exports = Vasarlo;
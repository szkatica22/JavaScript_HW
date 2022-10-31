const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Karacsonyfa = db.model("trees", {
    name: String,
    type: String,
    height: Number,
    price: Number,
    owner_ID: Schema.Types.ObjectId,
});

module.exports = Karacsonyfa;
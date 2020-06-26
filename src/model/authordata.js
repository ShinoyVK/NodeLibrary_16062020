const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name:String,
    country:String,
    web:String,
    wiki:String,
    imageinput:String

});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
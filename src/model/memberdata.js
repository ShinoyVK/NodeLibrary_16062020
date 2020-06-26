const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    firstname:String,
    lastname:String,
    gender:String,
    dob:String,
    district:String,
    phone:String,
    address:String,
    email:String,
    password:String

});

var Memberdata = mongoose.model('Memberdata',MemberSchema);

module.exports = Memberdata;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
           task:String,
           status:String, 
           checked:Boolean,
           _id:Number
});

const users = new mongoose.model('user',userSchema);

module.exports = users;
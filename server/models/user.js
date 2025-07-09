const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
})

const user = mongoose.model('users',UserSchema)
module.exports = user;
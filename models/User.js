const mongoose = require('mongoose');

UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requred: true,
        unique: true
    },
    password: {
        type: String,
        requred: true
    },
    avatar: {
        type: String
    },  
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);
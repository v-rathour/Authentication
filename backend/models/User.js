const passportlocalmongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true
    }
    
})

UserSchema.plugin(passportlocalmongoose);
const User = mongoose.model('User', UserSchema);

module.exports = User;
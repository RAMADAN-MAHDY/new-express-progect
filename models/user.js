const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userachema = new schema({
    name : String,
    age :Number,
    pass : Number,
    gender : Boolean ,
})

const User = mongoose.model('User', userachema);

module.exports = User ;
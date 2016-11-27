let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let usersSchema  = new Schema({

});


let User = mongoose.model('User', usersSchema);


module.exports = User;
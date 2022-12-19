const mongoose = require('mongoose');
const { Schema } = mongoose;
const collaborator = new Schema({
    firstName: {type:String},
    lastName: {type:String},
    email: {type:String},
    password: {type:String},
    role:{type:String,default:'collaborator'}
},
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('collaborator', collaborator , 'collaborator')
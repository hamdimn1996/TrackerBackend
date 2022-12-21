const mongoose = require('mongoose');
const { Schema } = mongoose;
const admin = new Schema({
    nom:String,
    prenom:String,
    email: {type:String},
    password: {type:String},
},
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('admin', admin , 'admin')
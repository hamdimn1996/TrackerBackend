const mongoose = require('mongoose');
const { Schema } = mongoose;
const utilisateur = new Schema({
    nom: {type:String},
    prenom: {type:String},
    adress: {type:String},
    password: {type:String},
    role:{type:String,default:'Collaborateur'}
},
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('utilisateur', utilisateur , 'utilisateur')
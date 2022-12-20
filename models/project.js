const mongoose = require('mongoose');
const { Schema } = mongoose;
const Projet = new Schema({
    nomprojet: {type:String},
    descriptionprojet : {type:String},
    projectownerid: {type:Schema.Types.ObjectId},
    colaboratorlist :[ {type:Schema.Types.ObjectId,ref:'utilisateur'}],
},
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('Projet', Projet , 'Projet')
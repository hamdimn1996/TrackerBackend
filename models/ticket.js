const mongoose = require('mongoose');
const { Schema } = mongoose;
const Ticket = new Schema({
    nomticket: {type:String},
    descriptionticket : {type:String},
    ownerId: {type:Schema.Types.ObjectId},
    projectid: {type:Schema.Types.ObjectId,ref:'project'},
    status:{type:String,default:'Ouvert'}
},
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('Ticket', Ticket , 'Ticket')
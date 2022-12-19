const mongoose = require('mongoose');
const { Schema } = mongoose;
const admin = new Schema({
    
    email: {type:String},
    password: {type:String},
},
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('admin', admin , 'admin')
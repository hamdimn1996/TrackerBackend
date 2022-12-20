const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProjectManager = new Schema({
    firstName: {type:String},
    lastName: {type:String},
    email: {type:String},
    password: {type:String},
    role:{type:String,default:'ProjectManager'}
},
    {
        timestamps: true, versionKey: false
    }
)

module.exports = mongoose.model('ProjectManager', ProjectManager , 'ProjectManager')
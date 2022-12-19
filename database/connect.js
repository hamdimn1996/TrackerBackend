
const mongoose = require('mongoose');
const option = {
    useNewUrlParser: true
};
mongoose.connect('mongodb+srv://hamdimn:12345hamdi@tracker.fyt3llb.mongodb.net/test', option ).then(success=>{
    console.log('Successfuly connected to database');
}).catch(error=>{
    console.log(error);
    console.log('error connecting to database');
})
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config()
require('./database/connect')
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "52428800"}));
app.use(bodyParser.urlencoded({limit: "52428800", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const adminapi = require('./routes/adminapi')
app.use('/',adminapi)
const collaboratorapi = require('./routes/collaboratorapi')
app.use('/',collaboratorapi)
const projectManagerapi = require('./routes/programManagerapi')
app.use('/',projectManagerapi)

app.listen(port,()=> {
    console.log('App is listening on port '+port);
})
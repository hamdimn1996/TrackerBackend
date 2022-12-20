const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = 4000;
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session')
dotenv.config()
require('./middlewares/bearer')
require('./database/connect')
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "52428800"}));
app.use(bodyParser.urlencoded({limit: "52428800", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({resave: true, secret: 'secret', saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const adminapi = require('./routes/adminapi')
app.use('/',adminapi)
const collaboratorapi = require('./routes/utilisateursapi')
app.use('/',collaboratorapi)
const projectManagerapi = require('./routes/programManagerapi');
app.use('/',projectManagerapi)
const projectapi = require('./routes/projectapi');
app.use('/',projectapi)

app.listen(port,()=> {
    console.log('App is listening on port '+port);
})
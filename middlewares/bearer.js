const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin')

passport.use(new BearerStrategy(
    (token, done) => {
        const decodedData = jwt.verify(token, 'secret');
        Admin.findById(decodedData.adminId, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
        });
    }
));
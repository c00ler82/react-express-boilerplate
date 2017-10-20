const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport');// because we are not exporting anything, so we dont assign this file to any variable

mongoose.connect(keys.mongoURI);

const app = express();

app.use( cookieSession({
    maxAge: 30*24*60*60*1000, //millisecond
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // const authRoutes = require('./routes/authRoutes'); authRoutes(app);

app.listen(5000);
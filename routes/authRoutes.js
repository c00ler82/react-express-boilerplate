const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/current_user/', (req, res) =>{
        res.send(req.user);           
    });

    app.get('/api/logout', (req, res) => {      
        req.logout();
        res.send(req.user);
    });
};


// this is the original function, but there is "app" object that is not defined which is the original "app" in index.js
// thats why we will export this file and pass "app" to it

// const passport = require('passport');

// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
// }));
// app.get('/auth/google/callback', passport.authenticate('google')); 
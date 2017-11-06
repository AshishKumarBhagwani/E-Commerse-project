const passport = require('passport');
const Strategy = require('passport-local').Strategy
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');


//PASSPORT STRATEGY
passport.use('User',new Strategy(function(username, password, done){
    User.findOne({username:username},function(err,user){
        if(err) return done(err);
        if(!user){
            return done(null,false);
        }
        if(!user.comparePassword(password)){
            return done(null,false);
        }
        return done(null,user);
    });
}));

//passport Serialization
passport.serializeUser(function(user,done){
    done(null,user._id);
});

//passport Deserialize
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err) return done(err);
        done(null,user);
    })
});

module.exports = passport;
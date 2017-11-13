const passport = require('passport');
const Strategy = require('passport-local').Strategy
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');
const Admin = require ('../models/Admin');


//PASSPORT STRATEGY

//Strategy for User
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

//Strategy for Admin
passport.use('Admin',new Strategy(function(username,password,done){
    Admin.findOne({username : username},function(err,admin){
        if(err) return done(err);
        if(!admin){
            return done(null,false);
        }
        if(!admin.comparePassword(password)){
            return done(null,false);
        }
        return done(null,admin);
    });
}));
//passport Serialization
passport.serializeUser(function(admin,done){
    done(null,admin._id);
});

//passport Deserialize
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,admin){
        if(err) return done(err);
        done(null,admin);
    })
});

module.exports = passport;
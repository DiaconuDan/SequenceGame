const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy ;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//clientID and clientSecret generated in keys
passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done)=> {
    new User({ googleId: profile.id}).save();
}));

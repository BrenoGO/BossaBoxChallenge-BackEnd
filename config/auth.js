"use strict";
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const mongoose = require('mongoose');

const secretOrKey = process.env.JWT_SECRET_OR_KEY;
const ExtractJWT = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('jwt'),
  secretOrKey,
};

module.exports = {
  get auth(){
    const User = mongoose.models.User;
    const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next){
      User.findById(jwt_payload._id).exec().then(user => {
        if(user){
          next(null, user);
        }else{
          next(null, false);
        }
      });
    });
    passport.use(strategy);
    return {
      initialize: function(){
        return passport.initialize();
      },
      get authenticate(){
        return passport.authenticate('jwt', {session: false});
      }
    };
  },
  login: function(name, password, callback){
    const User = mongoose.models.User;
    User.findOne({name, password}).exec().then(user => {
      if(user){
        const payload = { _id: user._id };
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        callback({message: 'ok', token});
      }else{
        callback(false);
      }
    });
  }
};

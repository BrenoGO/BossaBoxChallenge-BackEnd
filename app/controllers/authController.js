"use strict";
const login = require('../../config/auth').login;

module.exports = function(app){
  const controller = {
    login: (req, res) => {
      const { name, password } = req.body;
      login(name, password, function(result){
        if(result){
          res.json(result);
        }else{
          res.status(401).json({message: 'erro de autenticação'});
        }
      });
    }
  };
  return controller;
};
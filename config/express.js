"use strict";
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

var auth = require('./auth').auth;

module.exports = function () {
  const app = express();
  
  //app.set('port', process.env.PORT);
  app.set('port', 3001);
  app.use(auth.initialize());
  app.use(cors());
  app.use(bodyParser.json());
  
  consign({cwd: 'app'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);
  
  return app;
};
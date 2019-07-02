"use strict";
const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function () {
  const app = express();
  
  app.set('port', process.env.PORT);
  app.use(cors());
  app.use(bodyParser.json());
  
  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);
  
  return app;
};
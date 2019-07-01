"use strict"
var express = require('express');
var load = require('express-load');
var cors = require('cors');

module.exports = function () {
  var app = express();
  app.set('port', 3000);
  app.use(cors);

  return app;
}
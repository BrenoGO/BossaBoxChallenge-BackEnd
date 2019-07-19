"use strict";

const auth = require('../../config/auth.js').auth;


module.exports = function (app) {
  const toolsController = app.controllers.tools;
  const authController = app.controllers.authController;

  app.post('/login', authController.login);
  
  app.get('/tools', toolsController.index);
  app.get('/tools/:id', toolsController.showById);
  app.post('/tools', auth.authenticate, toolsController.newTool);
  app.delete('/tools/:id', auth.authenticate, toolsController.remove);
};
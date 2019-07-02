"use strict"
module.exports = function (app) {
  const toolsController = app.controllers.tools;

  app.get('/tools', toolsController.index);
  app.get('/tools/:id', toolsController.showById);
  app.post('/tools', toolsController.newTool);
  app.delete('/tools/:id', toolsController.remove);
}
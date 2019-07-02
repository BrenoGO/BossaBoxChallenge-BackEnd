"use strict"
const _ = require('lodash');

module.exports = function (app) {
  const Tools = app.models.tool;

  const controller = {
    async index(req, res){
      const tools = await Tools.find({}, [], {sort: {id: 1}});
      let resp = [];
      if(!_.isEmpty(req.query)){
        if (req.query.tag) {
          const Tag = req.query.tag;
          for (const tool of tools) {
            if(tool.tags.includes(Tag)){
              resp.push(tool);
            }
          }
          return res.json(resp);	
        }
        return res.send({});	
      }
      return res.json(tools);
    },
    showById: async (req, res) => {
      const tool = await Tools.find({id: req.params.id});
      res.json(tool);
    },
    newTool: async (req, res) => {
      const tools = await Tools.find();
      const maxToolId = _.maxBy(tools, 'id');
      const id = maxToolId.id + 1;
      const data = {...req.body, id};
      const tool = await Tools.create(data);
      res.json(tool);
    },
    remove: async (req, res) => {
      await Tools.findOneAndRemove({id: req.params.id});
      controller.index(req, res);
    }
  }
  return controller;
}
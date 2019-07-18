"use strict";
const _ = require('lodash');

module.exports = function (app) {
  const Tools = app.models.tool;

  const controller = {
    index: async (req, res) => {

      if(_.isEmpty(req.query)){//no query
        const tools = await Tools.find({}, [], {sort: {id: 1}});
        return res.json(tools);
      }
      if (req.query.tag) {//query is tag
        const { tag } = req.query;
        const tools = await Tools.find({tags: tag}, [], {sort: {id: 1}});
        return res.json(tools);	
      }
      return res.send({});	//query is not tag
    },

    searchTag: async (req, res) => {
      return res.send({ok:'ok'})
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
  };
  return controller;
};

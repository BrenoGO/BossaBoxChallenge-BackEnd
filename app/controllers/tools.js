"use strict";
const _ = require('lodash');

module.exports = function (app) {
  const Tool = app.models.tool;

  const controller = {
    index: async (req, res) => {

      if(_.isEmpty(req.query)){//no query
        const tools = await Tool.find({}, [], {sort: {id: 1}});
        return res.json(tools);
      }
      if (req.query.tag) {//query is tag
        const { tag } = req.query;
        const tools = await Tool.find({tags: tag}, [], {sort: {id: 1}});
        return res.json(tools);	
      }
      return res.send({});	//query is not tag
    },

    showById: async (req, res) => {
      const tool = await Tool.find({id: req.params.id});
      return res.json(tool);
    },

    newTool: async (req, res) => {
      const tools = await Tool.find();
      const maxToolId = _.maxBy(tools, 'id');
      const id = maxToolId.id + 1;
      const data = {...req.body, id};
      const tool = await Tool.create(data);
      return res.status(201).json(tool);
    },

    remove: async (req, res) => {
      await Tool.findOneAndRemove({id: req.params.id});
      return res.send({});
    }
  };
  return controller;
};

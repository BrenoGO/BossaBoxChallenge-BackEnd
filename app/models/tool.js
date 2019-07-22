"use strict";
const mongoose = require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      tags: {
        type: [String]
      }
    });
    return mongoose.model('Tool', schema);
};

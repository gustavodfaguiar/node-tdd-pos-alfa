'use strict'

const Model = require('./model')

const Controller = {
  create: (data, callback) => {
    Model.create(data, callback)
  },

  find: (query, callback) => {
    Model.find(query, callback)
  },

  findOne: (query, callback) => {
    Model.findOne(query, callback)
  },

  update: (query, mod, options, callback) => {
    Model.update(query, mod, options, callback);
  },

  remove: (query, callback) => {
    Model.remove(query, callback)
  }
}

module.exports = Controller

'use strict'
const PokemonModel = require('./model')
const Controller = require('./controller')

const CRUD = {
    create: (req, res) => {
        let mod = req.body
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        Controller.create(mod, callback)
    },

    find: (req, res) => {
        let query = {}
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        Controller.find(query, callback)
    },

    findOne: (req, res) => {
        let query = {_id: req.params.id}
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        Controller.find(query, callback)
    },

    update: (req, res) => {
        let query = {_id: req.params.id}
        let mod = req.body
        let options = {}
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        Controller.update(query, mod, options, callback)
    },

    remove: (req, res) => {
        let query = {_id: req.params.id}
        let callback = (err, data) => {
            if (err) throw new Error(err)
            res.json(data)
        }
        Controller.remove(query, callback)
    }
}


module.exports = CRUD

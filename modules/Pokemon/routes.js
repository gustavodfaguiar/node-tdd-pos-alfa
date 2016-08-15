const express = require('express')
const router = express.Router()
const CRUD = require('./crud')

router.post('/', CRUD.create)
router.get('/', CRUD.find)
router.get('/:id', CRUD.findOne)
router.put('/:id', CRUD.update)
router.delete('/:id', CRUD.remove)

module.exports = router

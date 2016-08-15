require('./../../../db/config')
const assert = require('assert')
const Controller = require('./../controller')

describe('Pokemon', () => {
  //CLEAR
  before((done) => {
    Controller.remove({}, (err, data) => done())
  })

  //EMPTY DB
  describe('Quando iniciamos sem pokémons a lista deve vir vazia', () => {
    it('Deve retornar um Array vazio', (done) => {
      let query = {}
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(0, data.length, 'Lista não veio vazia')
        done()
      }
      Controller.find(query, callback)
    })
  })

  //CREATE
  describe('Create', () => {
    it('No Create o retorno deve ser o mesmo objeto enviado, adicionado _id', (done) => {
      let mod = {
        name: 'Teste',
        attack: 8000,
        defense: 666
      }
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal('object', typeof data._id)
        assert.equal('Teste', data.name)
        assert.equal(8000, data.attack)
        assert.equal(666, data.defense)
        done()
      }
      Controller.create(mod, callback)
    })
  })

  //UPDATE
  describe('Update', () => {
    before((done) => {
      let mod = {
        name: 'Teste',
        attack: 8000,
        defense: 666
      }
      Controller.create(mod, (err, data) => done())
    })

    after((done) => {
      Controller.remove({}, (err, data) => done())
    })

    it('No Update o primeiro registro deve ser atualizado', (done) => {
      let mod = {
        name: 'Updated',
        attack: 9000,
        defense: 999
      }
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(1, data.ok, 'Não retornou OK')
        assert.equal(1, data.nModified, 'Não alterou o registro')
        done()
      }
      let query = {}
      Controller.update(query, mod, {}, callback)
    })
  })

  //REMOVE
  describe('Remove', () => {
    it('Deve remover os registros do banco', (done) => {
      let query = {}
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(1, data.result.ok, 'Não retornou OK')
        done()
      }
      Controller.remove(query, callback)
    })
  })

  //FIND ALL
  describe('Find All', () => {
    before((done) => {
      let mod = {
        name: 'Teste',
        attack: 8000,
        defense: 666
      }
      Controller.create(mod, (err, data) => done())
    })

    after((done) => {
      Controller.remove({}, (err, data) => done())
    })

    it('Deve retornar todos registros', (done) => {
      let query = {}
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal(1, data.length, 'Não encontrou 1 registro')
        done()
      }
      Controller.find(query, callback)
    })
  })

  //FIND ONE
  describe('Find One', () => {
    before((done) => {
      let mod = {
        name: 'Teste',
        attack: 8000,
        defense: 666
      }
      Controller.create(mod, (err, data) => done())
    })

    after((done) => {
      Controller.remove({}, (err, data) => done())
    })

    it('Deve retornar 1 registro', (done) => {
      let query = {}
      let callback = (err, data) => {
        assert.equal(null, err, 'Erro não é nulo')
        assert.equal('object', typeof data._id)
        done()
      }
      Controller.findOne(query, callback)
    })
  })
})

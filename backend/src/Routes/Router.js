const { Router } = require('express')
const CrochetController = require('../Controllers/CrochetController')
const AuthController = require('../Controllers/AuthController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Hello World!')
})

routes.post('/create', CrochetController.create)

routes.get('/crochets', CrochetController.indexAll)
routes.post('/session', AuthController.auth)

module.exports = routes
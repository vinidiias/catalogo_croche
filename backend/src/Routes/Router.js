const { Router } = require('express')
const CrochetController = require('../Controllers/CrochetController')
const AuthController = require('../Controllers/AuthController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Hello World!')
})

routes.get('/create', CrochetController.create)
routes.post('/session', AuthController.auth)

module.exports = routes
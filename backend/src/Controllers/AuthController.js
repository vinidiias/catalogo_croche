// src/controllers/authController.js
const jwt = require('jsonwebtoken');

module.exports = {
    async auth(req, res) {
        const { token } = req.body
        const secretKey = process.env.SECRET_KEY
        //console.log(secretKey)
        
        try{
            if(token !== secretKey) return res.status(400).send({authorized: false})
    
                return res.status(200).send({authorized: true})
        }catch(err){
            return res.status(400).send(err)
        }

    }
}

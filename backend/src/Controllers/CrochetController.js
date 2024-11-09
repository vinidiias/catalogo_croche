const Crochet = require('../Models/Crochet')

module.exports = {
    async create(req, res) {
        const { img1, img2, img3, img4, name, description, metrics, value } = req.body
        const { token } = req.headers
        const secret = process.env.SECRET_KEY

        if(token !== secret) return res.status(400).send('Não autorizado')
        
        try{
            const createdCrochet = await Crochet.create({
                img1,
                img2,
                img3,
                img4,
                name,
                description,
                metrics,
                value
            })
            
            return res.status(200).send(createdCrochet)
        }catch(err) {
            return res.status(400).send(err)
        }
    }
}
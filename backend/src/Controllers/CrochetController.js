const Crochet = require('../Models/Crochet')

module.exports = {
    async create(req, res) {
        const { img1, img2, img3, img4, name, description, metrics, value, backgroundColor, color } = req.body
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
                value,
                backgroundColor,
                color
            })
            
            return res.status(200).send(createdCrochet)
        }catch(err) {
            return res.status(400).send(err)
        }
    },
    async indexAll(req, res) {
        try{
            const allCrochets = await Crochet.find()

            return res.status(200).send(allCrochets)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}
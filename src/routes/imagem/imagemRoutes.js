const router = require('express').Router();
const imagemController = require('../../controllers/imagem/imagemController')

router.post('/imagem', async (req, res) => {
    // console.log('POST - IMAGEM')
    await imagemController.post(req, res)
})

router.patch('/imagem', async (req, res) => {
    await imagemController.update(req, res)
})

router.get('/imagem/:id', async (req, res) => {
    await imagemController.getOne(req, res)
})


module.exports = router
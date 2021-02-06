const router = require('express').Router();
const imagemController = require('../../controllers/imagem/imagemController')

router.post('/imagem', async (req, res) => {
    await imagemController.post(req, res)
})


module.exports = router
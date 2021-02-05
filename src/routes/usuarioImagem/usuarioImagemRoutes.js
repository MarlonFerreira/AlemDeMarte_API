const router = require('express').Router();
const usuarioImagemController = require('../../controllers/usuarioImagem/usuarioImagemController')

router.post('/usuarioimagem', async (req, res) => {
    await usuarioImagemController.post(req, res)
})

router.patch('/usuarioimagem', async (req, res) => {
    await usuarioImagemController.update(req, res)
})

router.get('/usuarioimagem?', async (req, res) => {
    await usuarioImagemController.get(req, res)
})

module.exports = router
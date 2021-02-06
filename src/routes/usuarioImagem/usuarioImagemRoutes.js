const router = require('express').Router();
const usuarioImagemController = require('../../controllers/usuarioImagem/usuarioImagemController')

router.get('/usuarioimagem?', async (req, res) => {
    await usuarioImagemController.get(req, res)
})

module.exports = router
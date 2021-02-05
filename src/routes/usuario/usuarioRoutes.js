const router = require('express').Router();
const usuarioController = require('../../controllers/usuario/usuarioController')

router.post('/usuario', async (req, res) => {
    await usuarioController.post(req, res)
})

router.patch('/usuario', async (req, res) => {
    await usuarioController.update(req, res)
})

router.delete('/usuario/:id', async (req, res) => {
    await usuarioController.delete(req, res)
})

router.get('/usuario/:id', async (req, res) => {
    await usuarioController.getOne(req, res)
})

router.get('/usuario', async (req, res) => {
    await usuarioController.getAll(req, res)
})

module.exports = router
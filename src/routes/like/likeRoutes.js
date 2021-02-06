const router = require('express').Router();
const likeController = require('../../controllers/like/likeController')

router.post('/like', async (req, res) => {
    await likeController.post(req, res)
})

router.delete('/like?', async (req, res) => {
    await likeController.delete(req, res)
})

module.exports = router
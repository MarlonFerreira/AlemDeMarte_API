const router = require('express').Router();
const likeController = require('../../controllers/like/likeController')

router.post('/like', async (req, res) => {
    // console.log('POST - LIKE')
    await likeController.post(req, res)
})

router.post('/dislike', async (req, res) => {
    // console.log('POST - LIKE')
    await likeController.delete(req, res)
})

module.exports = router
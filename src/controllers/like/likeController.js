const imagemModel = require('../../models/imagem/imagemModel')
const usuarioImagemModel = require('../../models/usuarioImagem/usuarioImagemModel')


const likeController = {

    post: async function (req, res) {
        let likes = req.body.likes + 1
        try {
            await imagemModel.updateImagem(req.body.id, likes)
            await usuarioImagemModel.updateUsuarioImagem(req.body.id, req.body.id_usuario, 'Curtido')

            return res.status(200)
        }
        catch (error) {
            console.log(error)
            return res.status(500)
        }
    },

    delete: async function (req, res) {
        let likes = req.body.likes - 1
        try {
            await imagemModel.updateImagem(req.body.id, likes)
            await usuarioImagemModel.updateUsuarioImagem(req.body.id, req.body.id_usuario, 'Like')

            return res.status(200)
        }
        catch (error) {
            console.log(error)
            return res.status(500)
        }
    },
}

module.exports = likeController
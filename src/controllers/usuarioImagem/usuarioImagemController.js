const model = require('../../models/usuarioImagem/usuarioImagemModel')


const usuarioImagemController = {

    get: async function (req, res) {
        const resultGet = await model.getUsuarioImagem(req.query.id, req.query.id_usuario)
        if (!resultGet) {
            await model.postUsuarioImagem(req.query.id, req.query.id_usuario)
            const resultGetPosPost = await model.getUsuarioImagem(req.query.id, req.query.id_usuario)
            return res.json(resultGetPosPost)
        }
        else {
            return res.json(resultGet)
        }
    },
}

module.exports = usuarioImagemController
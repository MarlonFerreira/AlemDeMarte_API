const model = require('../../models/imagem/imagemModel')

const ERRO_ID_UNIQUE_JA_CADASTRADO = 19

const imagemController = {

    post: async function (req, res) {
        return model.insertImagem(req.body.id)
            .then(resultado => {
                return res.json({ id: req.body.id })
            }).catch(error => {
                console.log('error', error)
                return res.status(500).json('Erro na operação')
            })

    },

    update: async function (req, res) {

        const likes = await model.getImagem(req.body.id)
            .then(resultado => {
                return parseInt(resultado.likes) + parseInt(req.body.like);
            })
            .catch(error => {
                return res.status(500).json('Erro na operação')
            })

        return model.updateImagem(likes, req.body.id)
            .then(resultado => {
                return res.json(resultado);
            })
            .catch(error => {
                return res.status(500).json('Erro na operação')
            })
    },

    getOne: async function (req, res) {
        return model.getImagem(req.params.id)
            .then(resultado => {
                return res.json(resultado);
            })
            .catch(error => {
                return res.status(500).json('Erro na operação')
            })
    },
}

module.exports = imagemController
const model = require('../../models/usuario/usuarioModel')

const usuarioController = {
    post: async function (req, res) {
        return model.insertUsuario(req.body.nome)
            .then(resultado => {
                return res.json(resultado);
            })
            .catch(error => {
                return res.status(500).json('Erro na operação')
            })
    },

    update: async function (req, res) {
        return model.updateUsuario(req.query.id, req.query.nome)
            .then(resultado => {
                return res.json(resultado);
            })
            .catch(error => {
                return res.status(500).json('Erro na operação')
            })
    },

    delete: async function (req, res) {
        return model.deleteUsuario(req.params.id)
            .then(resultado => {
                return res.json(resultado);
            })
            .catch(error => {
                return res.status(500).json('Erro na operação')
            })
    },

    getOne: async function (req, res) {
        return model.getUsuario(req.params.id)
            .then(resultado => {
                return res.json(resultado);
            })
            .catch(error => {
                return res.status(500).json('Erro na operação')
            })
    },

    getAll: async function (req, res) {
        return model.getUsuarios()
            .then(resultado => {
                return res.json(resultado);
            })
            .catch(error => {
                return res.status(500).json('Erro na operação')
            })
    },
}

module.exports = usuarioController
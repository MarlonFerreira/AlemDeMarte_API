const usuarioRoutes = require('./usuario/usuarioRoutes')
const imagemRoutes = require('./imagem/imagemRoutes')
const usuarioImagemRoutes = require('./usuarioImagem/usuarioImagemRoutes')
const likeRoutes = require('./like/likeRoutes')


const routes = [
    usuarioRoutes,
    imagemRoutes,
    usuarioImagemRoutes,
    likeRoutes
]

module.exports = routes
const BDSqlite = require("../../services/db/sqlite")

const imagem = {
    'id': 'int',
    'likes': 'int',
    'url': 'text'
};

class imagemModel {
    static async insertImagem(id) {
        const query = `INSERT INTO tab_imagens (id) VALUES ('${id}')`
        const context = new BDSqlite()
        return await context.run(connectionSqLite, query)
    }

    static async getUsuario(nome) {
        const query = `SELECT id FROM tab_usuarios WHERE nome = '${nome}'`

        const context = new BDSqlite()
        return await context.get(connectionSqLite, query)
    }

    static async updateImagem(id, likes) {
        const query = `UPDATE tab_imagens SET likes = '${likes}' WHERE id = '${id}'`

        const context = new BDSqlite()
        return await context.run(connectionSqLite, query)
    }
}

module.exports = imagemModel
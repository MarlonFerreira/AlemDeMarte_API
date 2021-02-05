const BDSqlite = require("../../services/db/sqlite")

const usuario = {
    'id':'int',
    'nome':'text'
};

class usuarioModel {
    static async insertUsuario(nome) {
        const query = `INSERT INTO tab_usuarios (nome) VALUES ('${nome}')`

        const context = new BDSqlite()
        return await context.run(connectionSqLite, query)
    }

    static async updateUsuario(id, nome) {
        const query = `UPDATE tab_usuarios SET nome = '${nome}' WHERE id = '${id}'`

        const context = new BDSqlite()
        return await context.run(connectionSqLite, query)
    }

    static async deleteUsuario(id) {
        const query = `DELETE FROM tab_usuarios WHERE id = '${id}'`

        const context = new BDSqlite()
        return await context.run(connectionSqLite, query)
    }

    static async getUsuario(id) {
        const query = `SELECT * FROM tab_usuarios WHERE id = '${id}'`

        const context = new BDSqlite()
        return await context.get(connectionSqLite, query)
    }

    static async getUsuarios() {
        const query = `SELECT * FROM tab_usuarios`

        const context = new BDSqlite()
        await context.all(connectionSqLite, query)
            .then(result => {
                if (result)
                    return result
                else
                    return 'Nada encontrado'
            })
            .catch(error => {
                return 'Erro na operação'
            })
    }
}

module.exports = usuarioModel
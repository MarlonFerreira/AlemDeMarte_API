const BDSqlite = require("../../services/db/sqlite")

const imagem = {
    'id': 'int',
    'id_usuario': 'int',
    'id_imagem': 'int',
    'btn_like_mostrar': 'text'
};

class usuarioImagemModel {
    static async getUsuarioImagem(id, id_usuario) {
    
        const query = `
                        SELECT ui.id, ui.id_imagem, i.likes, ui.id_usuario, u.nome, ui.like_mostrar FROM tab_usuario_imagem as ui INNER JOIN tab_usuarios as u
                        ON u.id = ui.id_usuario
                        INNER JOIN tab_imagens as i
                        ON i.id = ui.id_imagem
                        WHERE id_imagem = '${id}' and id_usuario ='${id_usuario}'
                    `
        const context = new BDSqlite()
        return await context.get(connectionSqLite, query)
    }
    
    static async postUsuarioImagem(id, id_usuario) {
        const query = `INSERT INTO tab_usuario_imagem (id_imagem, id_usuario) VALUES ('${id}' , '${id_usuario}')`
    
        const context = new BDSqlite()
        return await context.run(connectionSqLite, query)
    }

    static async updateUsuarioImagem(id, id_usuario, like) {
        const query = `UPDATE tab_usuario_imagem 
                        SET like_mostrar = '${like}' 
                        WHERE id_imagem ='${id}' 
                                                AND id_usuario = '${id_usuario}'`

        const context = new BDSqlite()
        return await context.run(connectionSqLite, query)
    }
}

module.exports = usuarioImagemModel
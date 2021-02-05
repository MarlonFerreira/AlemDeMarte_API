const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

class BDSqlite {
    constructor(connection, schema) {
        this.connection = connection
    }

    static async openConnection() {
        try {
            const db = await sqlite.open({ filename: './AlemDeMarte.db', driver: sqlite3.Database });
            return db;
        } catch (error) {
            console.log(error);
        }
    }

    async run(db, query) {
        try {
            return await db.run(query);
        } catch (error) {
            return error;
        }
    }

    async get(db, query) {
        try {
            return await db.get(query);
        } catch (error) {
            console.log(error);
        }
    }

    async all(db, query) {
        try {
            return await db.all(query);
        } catch (error) {
            console.log(error);
        }
    }










    async delete(db, nome) {
        try {
            await db.run(query);
            // await db.run(`DELETE FROM tab_usuarios WHERE nome = ?`, [nome]);
        }
        catch (error) {
            console.log(error);
        }
    }



    async select(query) {
        try {
            const rows = await db.all(query);
            // const rows = await db.all('select * from tab_usuarios');
        }
        catch (error) {
            console.log(error);
        }
    }

}

module.exports = BDSqlite
const express = require('express')
const bodyParser = require('body-parser');

var cors = require('cors')
const sqLite = require('./services/db/sqlite')

require('./services/util/erros')

const morgan = require('morgan')
accessLogStream = require('./services/util/log')

const variavelAmbiente = require('./services/util/variavelAmbiente')
const routes = require('./routes/routes')

variavelAmbiente.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors());

(async function main() {

    connectionSqLite = await sqLite.openConnection()

    app.use('/', routes);

    // process.env.PORT
    const server = app.listen(process.env.PORT || 8082, function () {
        console.log('Servidor rodando na porta ' + server.address().port);
    })
})()
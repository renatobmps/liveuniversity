const express = require('express');
const FormularioView = require('../frontend/FormularioView');
const bodyParser = require('body-parser');

class FormularioController {

    environment = {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000,
    }

    app = express();

    camposFormulario = [{
            nome: 'nome',
            id: 'nome',
            type: 'text',
        },
        {
            nome: 'sobrenome',
            id: 'sobrenome',
            type: 'text',
        },
        {
            nome: 'e-mail',
            id: 'email',
            type: 'email',
        },
    ]

    init() {
        this.appUser();
        this.startsServer();
        this.createRoutes();
    }

    appUser() {
        this.app.use(express.static('public'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    startsServer() {
        this.app.listen(this.environment.port, () => {
            console.log(`servidor rodando na porta 3000 | http://${this.environment.host}:${this.environment.port}`)
        });
    }

    createRoutes(){
        this.app.get('/', (req, res) => {
            res.send(FormularioView.render(this.camposFormulario))
        });
    }
}

module.exports = new FormularioController;
const express = require('express');
const bodyParser = require('body-parser');
const FormularioView = require('../frontend/FormularioView');
const Conexao = require('../infraestrutura/Conexao');

class FormularioController {
    constructor() {
        this.app = express();

        this.environment = {
            host: process.env.HOST || 'localhost',
            port: process.env.PORT || 3000,
        }

        this.camposFormulario = [{
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
    }

    async init() {
        this.appUse();
        this.startsServer();
        this.createRoutes();
    }

    appUse() {
        this.app.use(express.static('public'));
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }

    startsServer() {
        this.app.listen(this.environment.port, () => {
            console.log(`servidor rodando na porta ${this.environment.port} | http://${this.environment.host}:${this.environment.port}`)
        });
    }

    createRoutes() {
        this.app.get('/', (req, res) => {
            res.send(FormularioView.render(this.camposFormulario))
        });

        this.app.post('/form-post', async (req, res) => {
            const params = req.body

            const data = {
                nome: {
                    id: params.nid,
                    value: params.n,
                },
                sobrenome: {
                    id: params.sid,
                    value: params.s,
                },
                email: {
                    id: params.eid,
                    value: params.e,
                },
            }

            const resposta = await Conexao.grava(data);

            res.send(resposta);
        })
    }

    decoder(code) {
        let convertido = code.split('#');
        convertido = {
            'nome': convertido[1],
            'sobrenome': convertido[3],
            'email': convertido[5],
        }

        return convertido;
    }
}

module.exports = new FormularioController;
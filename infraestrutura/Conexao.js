const tp = require('tedious-promises');
const TYPES = require('tedious').TYPES;
const config = require('./tedious-config.json');

tp.setConnectionConfig(config);

class Conexao {
    async selectWhere(tabela, valor, col) {
        let resultado;

        const sql = `SELECT * FROM ${tabela} WHERE ${col} = @${col}`;
        await tp.sql(sql)
            .parameter(col, TYPES.Int, valor)
            .execute()
            .then(res => {
                resultado = res[0];
            })
            .catch(err => {
                throw new Error('consulta não realizada', err);
            })

        return resultado;
    }

    soma(data) {
        const somanome = parseInt(data[0].cod) + parseInt(data[0].soma);
        const somasobrenome = parseInt(data[1].cod) + parseInt(data[1].soma);
        const somaemail = parseInt(data[2].cod) + parseInt(data[2].soma);
        const total = somanome + somasobrenome + somaemail;

        return total;
    }

    async verificaResultado(total) {
        let resultado;

        const sql = `SELECT
            tbs_animais.id as animal_id,
            tbs_animais.animal,
            tbs_cores.id as cor_id,
            tbs_cores_excluidas.id as cor_excluida_id,
            tbs_cores.cor,
            tbs_cores_excluidas.cor as cor_excluida,
            tbs_paises.id as pais_id,
            tbs_paises.pais,
            tbs_animais.total
            FROM tbs_animais
            JOIN tbs_cores ON tbs_cores.total = tbs_animais.total
            LEFT JOIN tbs_cores_excluidas ON tbs_cores.cor = tbs_cores_excluidas.cor
            JOIN tbs_paises ON tbs_paises.total = tbs_animais.total
            WHERE tbs_animais.total = ${total}
            ORDER BY cor_excluida ASC`;

        await tp.sql(sql)
            .execute()
            .then(res => {
                resultado = { animal: res[0].animal, cor: res[0].cor, pais: res[0].pais };
            })
            .catch(err => {
                throw new Error(err);
            })

        return resultado;
    }

    async grava(data) {
        let resposta;

        const { nome, sobrenome, email } = data;

        const sql = `INSERT INTO tbs_nome (nome, cod) VALUES (@nome, @codN);
        INSERT INTO tbs_sobrenome (sobrenome, cod) VALUES (@sobrenome, @codS);
        INSERT INTO tbs_email (email, cod) VALUES (@email, @codE);`;

        await tp.sql(sql)
            .parameter('nome', TYPES.Char, nome.value)
            .parameter('codN', TYPES.Int, nome.id)
            .parameter('sobrenome', TYPES.Char, sobrenome.value)
            .parameter('codS', TYPES.Int, sobrenome.id)
            .parameter('email', TYPES.Char, email.value)
            .parameter('codE', TYPES.Int, email.id)
            .execute()
            .then(async res => {
                const codnome = await this.selectWhere('tbs_cod_nome', nome.id, 'cod');
                const codsobrenome = await this.selectWhere('tbs_cod_sobrenome', sobrenome.id, 'cod');
                const codemail = await this.selectWhere('tbs_cod_email', email.id, 'cod');

                const total = this.soma([codnome, codsobrenome, codemail]);

                const resultado = await this.verificaResultado(total);

                resposta = resultado;
            })
            .catch(err => {
                throw new Error("Erro: ", err);
            })

        return resposta;
    }
}

module.exports = new Conexao;
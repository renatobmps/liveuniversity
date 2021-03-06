const ejs = require('ejs');

class FormularioView {

    render(camposForm) {
        const campos = camposForm;
        let htmlTemplate;

        ejs.renderFile(
            './frontend/assets/formulario.ejs', {
                campos
            },
            (err, html) => {
                if (err) {
                    throw new Error('Erro com renderFile: ', err);
                }
                htmlTemplate = html;
            }
        )

        return htmlTemplate;
    }
}

module.exports = new FormularioView;
import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', evt => {
        evt.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique o form.');
}
const btnImportar = document.querySelector('#importar');
if (btnImportar) {
    btnImportar.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw Error('Não foi possível inicializar o botão Importar');
}
//# sourceMappingURL=app.js.map
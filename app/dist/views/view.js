export class View {
    constructor(seletor, escapar) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique o nome do seletor passado.`);
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
//# sourceMappingURL=view.js.map
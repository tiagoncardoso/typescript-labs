export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error('É necessário sobrescrever o método template para todas as classes que extendem de View');
    }
    update(model) {
        const elemento = this.template(model);
        this.elemento.innerHTML = elemento;
    }
}

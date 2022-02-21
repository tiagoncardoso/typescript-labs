export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // return [...this.negociacoes]; => Spread Operator
        return this.negociacoes;
    }
}

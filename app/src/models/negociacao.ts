import { imprimir } from "../utils/imprimir";
import { Imprimivel } from "../interfaces/imprimivel.js";

export class Negociacao implements Imprimivel {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data(): Date {
        // Programação defensiva: retona sempre o valor de instância
        // e não permite que _data seja alterada de fora do escopo
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
}

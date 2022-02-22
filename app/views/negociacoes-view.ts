import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
    
    protected template(negociacoes: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${negociacoes.lista().map(negociacao => {
                        return `<tr>
                                    <td>${this.formataData(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                </tr>`
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    public update(negociacoes: Negociacoes): void {
        const template = this.template(negociacoes);
        this.elemento.innerHTML = template;
    }

    private formataData(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}

import { domInject } from "../decorator/dom-injector.js";
import { inspecionar } from "../decorator/inspecionar.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInject('#data')
    private inputData: HTMLInputElement;
    @domInject('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInject('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoDeExecucao()
    @inspecionar()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (this.ehDiaUtil(negociacao.data)) {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limpaFormulario();
        } else {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.');
        }
    }

    public importaDados(): void {
        fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: Array<NegociacaoDoDia>) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante
                    );
                })
            })
            .then(negociacoesDeHoje => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }

                this.negociacoesView.update(this.negociacoes);
            })
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void
    {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
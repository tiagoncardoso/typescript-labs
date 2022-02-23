import { View } from "./view.js";
export class MensagemView extends View {
    template(mensagem) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }
    update(mensagem) {
        const template = this.template(mensagem);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=mensagem-view.js.map
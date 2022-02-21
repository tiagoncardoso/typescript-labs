import { View } from "./view.js";

export class MensagemView extends View<string> {

    template(mensagem: string): string {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }

    update(mensagem: string): void {
        const template = this.template(mensagem);
        this.elemento.innerHTML = template;
    }
}
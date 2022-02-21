export class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(model: T): string {
        throw Error('É necessário sobrescrever o método template para todas as classes que extendem de View');
    }

    update(model: T): void {
        const elemento = this.template(model);

        this.elemento.innerHTML = elemento;
    }
}
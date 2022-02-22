export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);

        if (elemento) {
            this.elemento = <HTMLElement> elemento;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique o nome do seletor passado.`);
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }
}
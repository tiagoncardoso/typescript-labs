import { Imprimivel } from "../interfaces/imprimivel";

export function imprimir(...objetos: Array<Imprimivel>) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}
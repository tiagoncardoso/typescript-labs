export function inspecionar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = metodoOriginal.apply(this, args);
            console.log(`--- Método ${propertyKey}`);
            console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
            console.log(`------ Retorno: ${retorno}`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspecionar.js.map
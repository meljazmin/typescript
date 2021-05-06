export default class Suma {
    private nro1: number;
    private nro2: number;

    constructor(nro1: number, nro2: number) {
        this.nro1 = nro1;
        this.nro2 = nro2;
    }

    public operar(): number {
        return this.nro1 + this.nro2;
    }
}
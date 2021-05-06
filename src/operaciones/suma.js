"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suma = /** @class */ (function () {
    function Suma(nro1, nro2) {
        this.nro1 = nro1;
        this.nro2 = nro2;
    }
    Suma.prototype.operar = function () {
        return this.nro1 + this.nro2;
    };
    return Suma;
}());
exports.default = Suma;

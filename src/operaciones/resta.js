"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pepe = /** @class */ (function () {
    function Pepe(nro1, nro2) {
        this.nro1 = nro1;
        this.nro2 = nro2;
    }
    Pepe.prototype.operar = function () {
        return this.nro1 - this.nro2;
    };
    return Pepe;
}());
exports.default = Pepe;

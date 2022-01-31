import {Conta} from "./Conta.js";

export class ContaSalario extends Conta{
    static numeroDeContas = 0;
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        ContaSalario.numeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}
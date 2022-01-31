import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(saldoInicial, cliente, agencia){  
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o metodo da classe mãe em conta, que foi extendida nessa classe.
    sacar(valor){ 
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }

}

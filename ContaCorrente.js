import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){ 
            this._cliente = novoValor;  
        }
    }

    get cliente(){
        return this._cliente;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }
    
    sacar(valor){
        if(this._saldo >= valor && valor >= 0){
            this._saldo -= valor;
            return valor; //return executa break.
        }
    }
    
    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }

    get saldo(){
        return this._saldo;
    }
}

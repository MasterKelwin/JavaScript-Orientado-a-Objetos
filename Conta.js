export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    
    taxa = 1.1 * valor;

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
}
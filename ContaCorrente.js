export class ContaCorrente{
    agencia;
    cliente;


    _saldo = 0;
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
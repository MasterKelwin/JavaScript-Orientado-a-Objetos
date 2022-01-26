export class ContaCorrente{
    _saldo;
    agencia;

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
}
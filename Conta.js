export class Conta{
    static numeroDeContas = 0;
    
    constructor(saldoInicial, cliente, agencia){
        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = 0 + saldoInicial;

        Conta.numeroDeContas += 1;

        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta")
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){ 
            this._cliente = novoValor;  
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    
    //taxa = 1.1 * valor;

    sacar(valor){
        throw new Error("Você não referenciou o saque no novo tipo de conta instanciado, o método não de Sacar não deve ser abstrato.");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
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
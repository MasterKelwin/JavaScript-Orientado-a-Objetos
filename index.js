class cliente{ //molde
    nome; //atributos do cliente
    cpf;
    rg;
}

class contaCorrente{
    saldo;
    agencia;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
    
    depositar(valor){
        this.saldo += valor
    }
}

const cliente1 = new cliente();  //objeto
cliente1.nome = "Kelwin";
cliente1.cpf = 11122233344;
cliente1.rg = 123456789; 
const contaCorrenteKelwin = new contaCorrente();
contaCorrenteKelwin.saldo = 0;
contaCorrenteKelwin.agencia = 0712;

contaCorrenteKelwin.depositar(150);
contaCorrenteKelwin.sacar(50);

const cliente2 = new cliente(); //objeto
cliente2.nome = "Dara";
cliente2.cpf = 99988877766;
cliente2.rg = 987654321;
const contaCorrenteDara = new contaCorrente();
contaCorrenteDara.saldo = 0;
contaCorrenteDara.agencia = 0712; 

contaCorrenteDara.depositar(200);
contaCorrenteDara.sacar(150);

//console.log(cliente1,cliente2);
console.log(contaCorrenteKelwin.saldo,contaCorrenteDara.saldo);



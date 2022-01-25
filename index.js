class cliente{ //molde
    nome; //atributos do cliente
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new cliente();  //objeto
cliente1.nome = "Kelwin";
cliente1.cpf = 11122233344;
cliente1.agencia = 0785;
cliente1.saldo = 0;
cliente1.rg = 123456789

const cliente2 = new cliente(); //objeto
cliente2.nome = "Dara";
cliente2.cpf = 99988877766;
cliente2.agencia = 0785;
cliente2.saldo = 0;

console.log(cliente1,cliente2);



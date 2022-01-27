import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();  //objeto
cliente1.nome = "Kelwin";
cliente1.cpf = 11122233344;
cliente1.rg = 123456789; 
const ContaCorrenteKelwin = new ContaCorrente();
ContaCorrenteKelwin.agencia = "0712";
ContaCorrenteKelwin.cliente = cliente1;
let valorSacadoKelwin;

ContaCorrenteKelwin.depositar(150);
valorSacadoKelwin = ContaCorrenteKelwin.sacar(50);
// ContaCorrenteKelwin.depositar(-2);
// ContaCorrenteKelwin.sacar(-2);

const cliente2 = new Cliente(); //objeto
cliente2.nome = "Dara";
cliente2.cpf = 99988877766;
cliente2.rg = 987654321;
const ContaCorrenteDara = new ContaCorrente();
ContaCorrenteDara.agencia = "0712"; 
ContaCorrenteDara.cliente = cliente2;

ContaCorrenteDara.depositar(200);
ContaCorrenteDara.sacar(150);

ContaCorrenteKelwin.transferir(25,ContaCorrenteDara);

console.log(ContaCorrenteDara);
//console.log("valor sacado: ",valorSacadoKelwin)
//console.log(ContaCorrenteKelwin._saldo,ContaCorrenteDara._saldo);
//console.log(ContaCorrenteKelwin)
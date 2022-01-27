import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Kelwin", 11122233344, 123456789);  //objeto
const ContaCorrenteKelwin = new ContaCorrente("0712", cliente1);
let valorSacadoKelwin;

ContaCorrenteKelwin.depositar(150);
valorSacadoKelwin = ContaCorrenteKelwin.sacar(50);

const cliente2 = new Cliente("Dara", 99988877766, 987654321); //objeto
const ContaCorrenteDara = new ContaCorrente("0712", cliente2);
let valorSacadoDara;

ContaCorrenteDara.depositar(200);
valorSacadoDara = ContaCorrenteDara.sacar(150);

ContaCorrenteKelwin.transferir(25,ContaCorrenteDara);

console.log(ContaCorrenteKelwin);
//console.log("valor sacado: ",valorSacadoKelwin)
//console.log(ContaCorrenteKelwin._saldo,ContaCorrenteDara._saldo);
//console.log(ContaCorrenteKelwin)
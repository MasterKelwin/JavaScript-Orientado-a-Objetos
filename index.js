import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"

const cliente1 = new Cliente("Kelwin", 11122233344, 123456789);  //objeto
const ContaCorrenteKelwin = new ContaCorrente("0712", cliente1);
const contaPoupancaKelwin = new ContaPoupanca(500, cliente1, "0712");
let valorSacadoKelwin;

const cliente2 = new Cliente("Dara", 99988877766, 987654321); //objeto
const ContaCorrenteDara = new ContaCorrente("0712", cliente2);
let valorSacadoDara;

ContaCorrenteKelwin.depositar(150);
valorSacadoKelwin = ContaCorrenteKelwin.sacar(50);

ContaCorrenteDara.depositar(200);
valorSacadoDara = ContaCorrenteDara.sacar(150);

ContaCorrenteKelwin.transferir(25,ContaCorrenteDara);


console.log (contaPoupancaKelwin);
// console.log(ContaCorrente.numeroDeContas);
// console.log("valor sacado: ",valorSacadoKelwin)
// console.log(ContaCorrenteKelwin._saldo,ContaCorrenteDara._saldo);
// console.log(ContaCorrenteKelwin)
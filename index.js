import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Kelwin", 11122233344, 123456789);  //objeto
const ContaCorrenteKelwin = new Conta(0, cliente1, "0712");
const contaPoupancaKelwin = new Conta(500, cliente1, "0712");
let valorSacadoKelwin;

const cliente2 = new Cliente("Dara", 99988877766, 987654321); //objeto
const ContaCorrenteDara = new Conta(0, cliente2, "0712");
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
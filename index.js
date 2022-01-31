import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import { Funcionario } from "./Funcionarios/Funcionario.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const cliente1 = new Cliente("Kelwin", 11122233344, 123456789);  //objeto
const ContaCorrenteKelwin = new ContaCorrente(0, cliente1, "0712");
const contaPoupancaKelwin = new ContaPoupanca(500, cliente1, "0712");
let valorSacado;

const cliente2 = new Cliente("Dara", 99988877766, 987654321); //objeto
const ContaCorrenteDara = new ContaCorrente(0, cliente2, "0712");

const diretorRengoku = new Diretor("Rengoku", 10000, 1212121212);
diretorRengoku.cadastrarSenha("078555")
//const estaLogado = SistemaAutenticacao.login(gerente, "078555");

const gerenteUzui = new Gerente("Uzui", 5000, 3434343434);
gerenteUzui.cadastrarSenha("111")
const estaLogado = SistemaAutenticacao.login(gerenteUzui, "111");

if(estaLogado == true){
    console.log("Você acessou o Kelwin Bank")
    }else{console.log("Acesso Recusado")}


// ContaCorrenteKelwin.depositar(150);
// valorSacado = ContaCorrenteKelwin.sacar(50);

// contaPoupancaKelwin.sacar(50);
// console.log(contaPoupancaKelwin);
// const testeConta = new ContaSalario(0, cliente1, "0712")
// console.log(testeConta)

// ContaCorrenteDara.depositar(200);
// valorSacado = ContaCorrenteDara.sacar(150);

//ContaCorrenteKelwin.transferir(25,ContaCorrenteDara);


//console.log (contaPoupancaKelwin);
//console.log(Conta.numeroDeContas);
//console.log("valor sacado: ",valorSacado)
// console.log(ContaCorrenteKelwin._saldo,ContaCorrenteDara._saldo);
//console.log(ContaCorrenteKelwin);
//console.log(ContaCorrente.numeroDeContas);
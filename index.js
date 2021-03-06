import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import { Funcionario } from "./Funcionarios/Funcionario.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limpaFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}

const cliente1 = new Cliente("Kelwin", 11122233344, 123456789, "k12");  //objeto
const ContaCorrenteKelwin = new ContaCorrente(0, cliente1, "0712");
const contaPoupancaKelwin = new ContaPoupanca(500, cliente1, "0712");
let valorSacado;

const cliente2 = new Cliente("Dara", 99988877766, 987654321, "d12"); //objeto
const ContaCorrenteDara = new ContaCorrente(0, cliente2, "0712");

const diretorRengoku = new Diretor("Rengoku", 10000, 1212121212);
diretorRengoku.cadastrarSenha("078555")
const diretorEstaLogado = SistemaAutenticacao.login(diretorRengoku, "078555");

const gerenteUzui = new Gerente("Uzui", 5000, 3434343434);
gerenteUzui.cadastrarSenha("111")
const gerenteEstaLogado = SistemaAutenticacao.login(gerenteUzui, "1121");

const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "k12");

if(gerenteEstaLogado == true){
    console.log("Voc?? acessou o Kelwin Bank")
    }else{console.log("Acesso Recusado")}

if(diretorEstaLogado == true){
    console.log("Bem vindo Sr. Rengoku")
    }else{console.log("Acesso Recusado")}

if(clienteEstaLogado == true){
    console.log("Voc?? acessou o Kelwin Bank")
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

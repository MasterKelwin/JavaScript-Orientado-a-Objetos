export class Cliente{ //molde
    nome; //atributos do cliente
    _cpf;
    _rg;

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    constructor(nome, cpf, rg){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }
}
export class Cliente{ //molde
    constructor(nome, cpf, rg, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._senha = senha;
    }
    
    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    autenticar(senha){
        return senha == this._senha;
    }
    


}
export default class Cliente {
    private nome:string;
    private idade:number;
    private id:string;

    constructor(nome:string, idade:number, id:string = ''){
        this.nome = nome
        this.idade = idade
        this.id = id
    } 


    static vazio() {
        return new Cliente('', 0)
    }


    get _id(){
        return this.id
    }
    get _nome(){
        return this.nome
    }
    get _idade(){
        return this.idade
    }

}
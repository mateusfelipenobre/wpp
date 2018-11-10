import {Mensagem} from"./Mensagem";

export class Usuario{
    private nome : string;
    private mensagens : Array<Mensagem>;
    t

    public constructor(nome : string){
        this.nome = nome;
        this.mensagens = [];
        
    }
    public getNome() : string{
        return this.nome;
    } 
    public setNome(nome: string) : void{
        this.nome = nome;
    }
    
}


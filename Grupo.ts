import {Usuario} from"./Usuario";
export class Grupo{
    private nome : string;
    private usuarios : Array<Usuario>;
    private mensagens : Mensagem[] = new Array();

    public constructor(user : Usuario, nome : string){
        this.nome = nome;
        this.usuarios = []; 
        this.addUser(user)
    }
    public getNome() : string{
        return this.nome;
    }   
    public addUser(user : Usuario) : void{
        this.usuarios.push(user);
    }
    public buscarUser(user : Usuario) : Usuario{
        
        for(let u of this.usuarios){
            if (u == user)
             return u;
        }
        return undefined
    }   
     
    public removePessoa(user:Usuario):string{
        if(this.usuarios.length>0){
            for(let i in this.usuarios){
                if(this.usuarios[i] == user){
                    this.usuarios.splice(Number(i),1);
                    return "Usuario removido"
                }
            }
            return "Usuário não encontrado"
        }else{
            return "vazio";
        }
    }
    

    public vizualizar(nome:Usuario):string{
        if(this.mensagens.length>0){
            let msgs:string = "";
            for(let i of this.mensagens){
                    if(i.verVisualizacao(nome) == 1){
                        msgs += i.getMsg() + "\n";
                        i.visualizou(nome);
                    }
                }
                if(msgs==""){
                   return "Nenhuma mensagem" 
                }
                return msgs;
            }else{
            return "Vazio";
        }
}
}

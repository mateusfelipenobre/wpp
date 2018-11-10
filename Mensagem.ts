import {Usuario} from"./Usuario";
export class Mensagem{
    private texto : string;
    private emissor : Usuario;
    private leitores : Array<Usuario>

    public constructor(emissor : Usuario, texto : string){
        this.texto = texto;
        this.emissor = emissor;
        this.leitores = [this.emissor];
   }
    public getTexto() : string{
    return this.texto;
} 
    public setTexto(texto: string) : void{
    this.texto = texto;
}
    public getEmissor() : Usuario{
     return this.emissor;
} 
    public setEmissor(emissor: Usuario) : void{
     this.emissor = emissor;
}
    public getLeitores() : Array<Usuario>{
     return this.leitores;
} 
    public setLeitores(leitores: Array<Usuario>) : void{
     this.leitores = leitores;
}
    public toString() : string{
       return "[" + this.emissor.getNome() + " : " + this.texto + "]";
    }
    public verVisualizacao(user:Usuario):number{
        if(this.leitores.length>0){
            for(let i of this.leitores){
                if(i == user){
                    return 0;
                }
            }
            return 1;
        }else{
            return 2;
        }
}
}

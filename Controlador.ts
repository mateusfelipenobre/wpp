declare function require(msg : string) : any;
var readline = require('readline-sync');
import {Usuario} from"./Usuario";
import {Grupo} from"./Grupo";


export class Controlador{
    private grupos : Array<Grupo>;
    private usuarios : Array<Usuario>;
    private visualizacoes: Usuario[] = new Array();

    public constructor(){
        this.grupos = [];
        this.usuarios = [];
    }
    public menu(){
      let opcao : string = "";
      let nome : string = ""; 
      let nomeGrupo : string = "";
      let grupo :string = "";
      while (true){
          opcao = readline.question("digite a opcao: ");
          switch(opcao){
              case "adicionar usuarios" :
              nome = readline.question("Digite o nome do usuário: ");
              this.usuarios.push(new Usuario(nome));
              break;
              case "todos os usuarios" :
              for(let i of this.usuarios){
                console.log(i);                  
              }
              break;
              case "criar grupo" :
              nomeGrupo = readline.question("Digite o nome do grupo: ");
              nome = readline.question("Digite o nome do usuário: ");
              let user : Usuario = this.buscarUser(nome);
              this.grupos.push(new Grupo(user,nomeGrupo));
              break;



          }   
        }
    }
   
    public buscarUser(nome : string) : Usuario{
        for(let u of this.usuarios){
            if(u.getNome()==nome)
                return u;
        }

        return undefined;

    }
    public buscarGrupo(nome : string) : Grupo{
        for(let g of this.grupos){
            if(g.getNome()==nome)
                return g
        }
        return undefined
    }
    public seeGrupoUser(nome: string) : string{
      let user = this.buscarUser(nome);
      let res : string;
      res = "";
      for(let u of this.grupos){
          if (u.buscarUser(user) != undefined)
          res += u.getNome();
          
      }
        return res 
    }
    public addPessoaGrupo(grupo:string,nome:string):string{
        if(this.buscarUser(nome)!=undefined){
            let pessoa:any = this.buscarUser(nome);
            if(this.buscarGrupo(grupo) != undefined){
                let grupob:any = this.buscarGrupo(grupo);
                for(let i of grupob.getPessoas()){
                    if(i.getNome()==pessoa.getNome()){
                        return "Pessoa já cadastrada";
                    }else{
                        pessoa.addChat(grupob);
                        grupob.addPessoa(pessoa);
                        return pessoa.getNome() + " entrou no " + grupob.getNome();
                    }
                }
            }else{
                return "não encontrado";
            }
        }else{
            return "não encontrado";
        }
    }
    
    public removePessoaGrupo(nome:string,grupo:string):string{
        if(this.buscarGrupo(grupo)!=undefined){
            if(this.buscarUser(nome)!=undefined){
                return this.buscarGrupo(grupo).removePessoa(this.buscarUser(nome));
                
            }else{
                return "invalido";
            }
        }
    }
          

    



    

    
}
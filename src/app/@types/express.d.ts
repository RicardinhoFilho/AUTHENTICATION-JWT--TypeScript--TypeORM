//Adicionando a propriedade userId dentro da funcionalidade Request do Express
declare namespace Express{
    export interface Request{
        userId:int;
    }
}
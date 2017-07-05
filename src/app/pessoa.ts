export class Pessoa {
    
    nomeCompleto: string = "";
    telefoneFixo: string = "";
    telefoneContato: string = "";
    email: string = "";
    quantidade: number= 0;
    opAtual: string = "";
    razaoSocial: string = "";
    cnpj: string = "";
    tipoContato: string = "";
    fechamento: Fechamento = 0;
    status: Status = 0;
    id: number;
}

export enum Status{
    SEM_OFERTA = 0,
    VENDIDO = 1,
    PERDIDO = 2,
    EM_NEGOCIACAO = 3
}

export enum Fechamento{
    INICIADO = 0,
    FINALZIADO = 1,
    EXCLUIDO = 2    
}
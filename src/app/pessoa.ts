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
    ofertou: OfertaVenda = 0;
    vendeu: OfertaVenda = 0;
    id: number;

}

enum OfertaVenda{
    SEM_OFERTA = 0,
    SIM = 1,
    NAO = 2
}
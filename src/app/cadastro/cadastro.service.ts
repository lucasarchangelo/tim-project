import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pessoa } from './../pessoa';
import 'rxjs/add/operator/map';

@Injectable()
export class CadastroService {

  url = "https://kritiunstudy.herokuapp.com/database/incluir"
  constructor(private http: Http) { }

  incluirPessoa(pessoa: Pessoa){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers });
    console.log(JSON.stringify(pessoa));
    return this.http.post(this.url, JSON.stringify(pessoa), options).
      map(dados => dados.json()).subscribe(dados => console.log(dados));
  }
}

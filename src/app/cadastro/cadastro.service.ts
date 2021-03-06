import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pessoa } from './../pessoa';
import 'rxjs/add/operator/map';

@Injectable()
export class CadastroService {

  url = `https://fernando-endpoint.herokuapp.com/database/incluir`;
  // url = "http://localhost:8080/database/incluir";
  constructor(private http: Http) { }

  incluirPessoa(pessoa: Pessoa) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers });
    if (pessoa.telefoneFixo == null) {pessoa.telefoneFixo = ''}
    return this.http.post(this.url, JSON.stringify(pessoa), options).
      map((res: Response) => res.json());
  }
}

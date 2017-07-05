import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pessoa } from './../pessoa';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  urlMain = "https://kritiunstudy.herokuapp.com/database";
  //urlMain = "http://localhost:8080/database";

  constructor(private http: Http) {
   }

   getClientes(){
      let urlComplement = "/listaClientesPendentes";
      
      return this.http.get(this.urlMain + urlComplement).map((res:Response) => res.json());
   }

   updateCliente(pessoa: Pessoa){
      let urlComplement = "/incluir";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers });
      
      return this.http.post(this.urlMain + urlComplement, JSON.stringify(pessoa), options).
      map((res:Response)=> res.json());
   }

}

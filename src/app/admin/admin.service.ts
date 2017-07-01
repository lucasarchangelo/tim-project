import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pessoa } from './../pessoa';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  url = "https://kritiunstudy.herokuapp.com/database/listaSemOferta";

  constructor(private http: Http) {
   }

   getClientes(){
      return this.http.get(this.url).map((res:Response) => res.json());
   }

}

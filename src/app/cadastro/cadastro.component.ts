import { Component, OnInit } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(private cadastroService: CadastroService) {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form); 
    console.log(this.pessoa.nomeCompleto);
    this.cadastroService.incluirPessoa(this.pessoa);
  }

}

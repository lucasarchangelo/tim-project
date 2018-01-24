import { Component, OnInit } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { Pessoa } from './../pessoa';

declare var $: any;

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

    $('#loading').modal({
      keyboard: false,
      backdrop: 'static'
    });

    this.cadastroService.incluirPessoa(this.pessoa).subscribe(data => {
      $('#loading').modal('hide');
      form.reset();
      $('#sucess').modal();
    });
  }

}

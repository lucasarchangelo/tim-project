import { Pessoa, Fechamento, Status } from './../pessoa';
import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  clientes:Pessoa[];
  vendeu: number;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
     this.loadClients();
  }

  loadClients(){
    this.adminService.getClientes().subscribe(data => this.clientes = data);
  }

  salvarProposta(pessoa: Pessoa, index: number){    
    pessoa.fechamento = Fechamento.INICIADO;
    
    this.adminService.updateCliente(pessoa).subscribe(data => {
      alert('Cliente atualizado!');
      this.loadClients();
      this.clientes.splice(index, 1);
    });
  }

  excluirProposta(pessoa: Pessoa, index: number){
    pessoa.fechamento = Fechamento.EXCLUIDO;

    this.adminService.updateCliente(pessoa).subscribe(data => {
      alert('Cliente atualizado!');
      this.loadClients();
      this.clientes.splice(index, 1);
    });
  }

  formatarData(long: number){
    return new Date(long).toLocaleString('en-GB');
  }

}

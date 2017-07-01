import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroService } from './cadastro/cadastro.service';
import { AdminService } from './admin/admin.service';
import { AdminComponent } from './admin/admin.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    CadastroService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

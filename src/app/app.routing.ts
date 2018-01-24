import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { AdminComponent } from './admin/admin.component';
import { PromocoesComponent } from 'app/promocoes/promocoes.component';


const APP_ROUTES: Routes = [
    { path: '', component: CadastroComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'promocoes', component: PromocoesComponent},
    { path: 'fernandoconsultoria', component: AdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

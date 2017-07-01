import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { AdminComponent } from './admin/admin.component';


const APP_ROUTES: Routes = [
    { path: '', component: CadastroComponent },
    { path: 'timadminfernando', component: AdminComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
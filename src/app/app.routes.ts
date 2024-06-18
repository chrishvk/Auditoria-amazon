import { Routes } from '@angular/router';
import { AmazonComponent } from './pages/amazon/amazon.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    {
        path: 'amazon',
        canActivate: [authGuard],
        component: AmazonComponent
    },
    {
        path: 'iniciar',
        component: IniciarSesionComponent
    },
    {
        path: 'registrar',
        component: RegistrarComponent
    },
    {
        path: '**', redirectTo: 'amazon', pathMatch: 'full'
    }
];

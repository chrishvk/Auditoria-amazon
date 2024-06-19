import { Routes } from '@angular/router';
import { AmazonComponent } from './pages/amazon/amazon.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { authGuard } from './guards/auth.guard';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { EditarComponent } from './pages/editar/editar.component';
import { AccesoComponent } from './pages/acceso/acceso.component';


export const routes: Routes = [
    {
        path: 'amazon',
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
        path:'acceso',
        canActivate: [authGuard],
        component: AccesoComponent
    },
    {
        path:'cuenta',
        canActivate: [authGuard],
        component: CuentaComponent
    },
    {
        path:'editar',
        canActivate: [authGuard],
        component: EditarComponent
    },
    {
        path: '**', redirectTo: 'amazon', pathMatch: 'full'
    }
];

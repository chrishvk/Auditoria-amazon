import { Routes } from '@angular/router';
import { AmazonComponent } from './pages/amazon/amazon.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { authGuard } from './guards/auth.guard';
import { ShowAmazonComponent } from './pages/show-amazon/show-amazon.component';


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
        path:'show-amazon',
        canActivate: [authGuard],
        component: ShowAmazonComponent
    },
    {
        path: '**', redirectTo: 'amazon', pathMatch: 'full'
    }
];

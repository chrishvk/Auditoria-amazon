import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  public email: string = '';
  public password: string = '';
  public message: string = '';
  public type: string = '';
  public loadinglogin: boolean = false;

  constructor(private authService: AuthenticateService, private router:Router) {}

  login() {
    if(this.email === '' || this.password === '') {
      this.message = "Error: Ingresa un correo válido y/o contraseña"
      this.type = "danger";
    }
    else {
      this.loadinglogin = true;
      this.authService.login(this.email, this.password)
        .then(() => {
          this.loadinglogin = false;
          this.router.navigate(['/show-amazon']);
        })
        .catch((error) => {
          if (error.message === 'auth/email-not-verified') {
            this.message = "Tu correo aun no ha sido verificado. Por favor revisa tu correo y verifica tu cuenta";
            this.type = "warning";
          } else {
            this.message = "Error: " + error.message;
            this.type = "danger";
          }
          this.loadinglogin = false;
        });
    }
  }
}

import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticateService } from '../../services/authenticate.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GuardarService } from '../../services/guardar.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css',
})
export class RegistrarComponent {
  public nombre: string = '';
  public email: string = '';
  public password: string = '';
  public passwordvalidar: string = '';
  public message: string = '';
  public type: string = '';
  public loadingregister: boolean = false;

  private readonly guardarService = inject(GuardarService);

  constructor(private authService: AuthenticateService) {}

  register() {
    if (
      this.nombre === '' ||
      this.email === '' ||
      this.password === '' ||
      this.passwordvalidar === ''
    ) {
      this.message = 'Error: Complete todos los campos';
      this.type = 'danger';
    } else if (this.password !== this.passwordvalidar) {
      this.message = 'Error: Las contraseñas no coinciden';
      this.type = 'danger';
    } else {
      this.loadingregister = true;
      this.authService
        .register(this.email, this.password)
        .then(() => {
          this.message =
            'Se ha registrado existosamente! Por favor verifica tu correo para confirmar tu cuenta';
          this.type = 'success';
          this.loadingregister = false;
        })
        .catch((error) => {
          this.message = 'Error: ' + error.message;
          this.type = 'danger';
          this.loadingregister = false;
        });
    }
  }

  guardar() {
    this.guardarService
    .agregarUsuario(this.nombre, this.email, this.password)
  }
}

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
  public edad: string = '';
  public message: string = '';
  public type: string = '';
  public loadingregister: boolean = false;

  public message1: string = '';
  public message2: string = '';
  public message3: string = '';
  public message4: string = '';
  public message5: string = '';
  public messageError: string = '';

  private readonly guardarService = inject(GuardarService);

  constructor(private authService: AuthenticateService) {}

  register() {
    if(this.nombre === '') {
      this.message1 = '! Introduce tu nombre'
    } else if (this.edad === '') {
      this.message1 = ''
      this.message2 = '! Escriba su edad'
    } else if (parseInt(this.edad) < 10 || parseInt(this.edad) > 90) {
      this.message1 = ''
      this.message2 = '! La edad mínima es de 10 y la máxima de 90 años'
    } else if (this.email === '') {
      this.message1 = ''
      this.message2 = ''
      this.message3 = '! Escriba su correo electrónico'
    } else if (this.password === '') {
      this.message1 = ''
      this.message2 = ''
      this.message3 = ''
      this.message4 = '! Ingrese una contraseña'
    } else if (this.password.length < 6) {
      this.message1 = ''
      this.message2 = ''
      this.message3 = ''
      this.message4 = '! Se requiere un mínimo de 6 caracteres'
      this.message5 = ''
    } else if (this.password !== this.passwordvalidar) {
      this.message1 = ''
      this.message2 = ''
      this.message3 = ''
      this.message4 = ''
      this.message5 = '! Las contraseñas no coinciden'
    } else {
            this.loadingregister = true;
            this.guardarService
              .agregarUsuario(this.nombre, this.email, this.password)
            this.authService
              .register(this.email, this.password)
              .then(() => {
                this.message =
                  'Se ha registrado existosamente! Por favor verifica tu correo para confirmar tu cuenta';
                this.type = 'success';
                this.loadingregister = false;
              })
              .catch((error) => {
                if(error.message === 'Firebase: Error (auth/email-already-in-use).') {
                  this.messageError = 'Este correo ya está en uso';
                  this.loadingregister = false;
                }
              });
          }
    }   
}

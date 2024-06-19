import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  constructor(private authService: AuthenticateService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/amazon'])
  }
}

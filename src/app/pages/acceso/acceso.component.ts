import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './acceso.component.html',
  styleUrl: './acceso.component.css'
})
export class AccesoComponent {

  constructor(private authService: AuthenticateService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/amazon'])
  }
}

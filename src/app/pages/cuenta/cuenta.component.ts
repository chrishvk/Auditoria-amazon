import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {

  constructor(private authService: AuthenticateService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/amazon'])
  }
}

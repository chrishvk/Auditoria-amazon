import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amazon',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './amazon.component.html',
  styleUrl: './amazon.component.css'
})
export class AmazonComponent {

  constructor(private authService: AuthenticateService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/iniciar'])
  }
}

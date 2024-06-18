import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticateService } from '../../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-amazon',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './show-amazon.component.html',
  styleUrl: './show-amazon.component.css'
})
export class ShowAmazonComponent {
  constructor(private authService: AuthenticateService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/amazon'])
  }
}

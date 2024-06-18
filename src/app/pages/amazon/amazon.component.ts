import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-amazon',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './amazon.component.html',
  styleUrl: './amazon.component.css'
})
export class AmazonComponent {

  constructor() {}
}

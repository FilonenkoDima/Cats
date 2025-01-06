import { Component } from '@angular/core';
import { CatsComponent } from './features/cats/cats.component';

@Component({
  selector: 'app-root',
  imports: [CatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

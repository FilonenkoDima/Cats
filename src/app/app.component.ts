import { Component } from '@angular/core';
import { CatsComponent } from './features/cats/cats.component';
import {
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [CatsComponent, MatDrawerContent, MatDrawerContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

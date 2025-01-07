import { Component } from '@angular/core';
import { CatsComponent } from './features/cats/cats.component';
import {
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { LoaderComponent } from './core/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [
    CatsComponent,
    MatDrawerContent,
    LoaderComponent,
    MatDrawerContainer,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

import { Component } from '@angular/core';
import {
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';

import { CatsComponent } from './features/cats/cats.component';

@Component({
  selector: 'app-root',
  imports: [CatsComponent, MatDrawerContent, MatDrawerContainer],
  templateUrl: './app.component.html',
})
export class AppComponent {}

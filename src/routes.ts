import { Routes } from '@angular/router';
import { catsResolve } from './app/core/services/cats.resolve';
import { breedsResolve } from './app/core/services/breeds.resolve';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full',
  },
  {
    path: 'cats',
    resolve: [catsResolve, breedsResolve],
    loadComponent: () =>
      import('./app/features/cats/cats.component').then((a) => a.CatsComponent),
  },
  {
    path: '**',
    redirectTo: 'cats',
  },
];

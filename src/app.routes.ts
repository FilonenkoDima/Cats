import { Routes } from '@angular/router';

import { catsResolve } from './app/core/resolvers/cats.resolve';
import { breedsResolve } from './app/core/resolvers/breeds.resolve';
import { CatsComponent } from './app/features/cats/cats.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full',
  },
  {
    path: 'cats',
    component: CatsComponent,
    resolve: [catsResolve, breedsResolve],
    // loadComponent: () =>
    //   import('./app/features/cats/cats.component').then((a) => a.CatsComponent),
  },
  {
    path: '**',
    redirectTo: 'cats',
  },
];

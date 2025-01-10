import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { catsApiInterceptor } from './app/core/interceptors/cats-api.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { catsReducer } from './app/features/cats/store/cats.reducer';
import { provideEffects } from '@ngrx/effects';
import { CatsEffect } from './app/features/cats/store/cats.effect';
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([catsApiInterceptor])),
    provideAnimationsAsync(),
    provideStore({ cats: catsReducer }),
    provideEffects(CatsEffect),
    provideRouter(appRoutes),
  ],
};

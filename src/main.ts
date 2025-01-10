/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { catsApiInterceptor } from './app/core/interceptors/cats-api.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { catsReducer } from './app/features/cats/data/cats.reducer';
import { CatsEffect } from './app/features/cats/data/cats.effect';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([catsApiInterceptor])),
    provideAnimationsAsync(),
    provideStore({ cats: catsReducer }), // todo export to separated file
    provideEffects(CatsEffect),
  ],
}).catch((err) => console.error(err));

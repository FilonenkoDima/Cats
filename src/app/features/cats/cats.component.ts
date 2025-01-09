import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Breed, Cat } from './cats.model';
import { selectBreeds, selectCats } from './data/cats.selectors';
import { loadBreeds, loadCats } from './data/cats.actions';
import { filter, map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCard, MatCardImage } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatFormField,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatCard,
    MatCardImage,
    NgbModule,
  ],
})
export class CatsComponent {
  private store = inject(Store);
  breeds$: Observable<Breed[]>;
  cats$: Observable<Cat[]>;

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    breedName: [''],
    count: [20],
  });

  constructor() {
    this.store.dispatch(loadBreeds());

    this.breeds$ = this.store.select(selectBreeds);
    this.cats$ = this.store.select(selectCats);
  }

  loadCats() {
    const name = this.form.value.breedName!;
    this.getBreedsIdByName(name).subscribe((id) => {
      this.store.dispatch(loadCats({ breedsId: id, count: 10 }));
    });
  }

  private getBreedsIdByName(name: string) {
    return this.breeds$.pipe(
      map((breeds) => {
        const breed = breeds.find((b) => b.name === name);
        return breed!.id ?? '';
      }),
    );
  }
}

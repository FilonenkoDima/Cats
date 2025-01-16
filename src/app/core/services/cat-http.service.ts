import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catAPI_URL } from '../../../enviroments/enviroments';
import { Breed, Cat } from '../models/cats.model';

@Injectable({
  providedIn: 'root',
})
export class CatHttpService {
  private httpClient: HttpClient = inject(HttpClient);

  getCats(breedsId: string = '', count: number = 12): Observable<Cat[]> {
    return this.httpClient.get<any[]>(
      `${catAPI_URL}/images/search?limit=${count}&breed_ids=${breedsId}`,
    );
  }

  getCatBreeds(): Observable<Breed[]> {
    return this.httpClient.get<any[]>(`${catAPI_URL}/breeds`);
  }
}

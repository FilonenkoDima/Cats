import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { catAPI_URL } from '../../../enviroments/enviroments';
import { Breed } from '../../features/cats/cats.model';

@Injectable({
  providedIn: 'root',
})
export class CatHttpService {
  private httpClient: HttpClient = inject(HttpClient);

  getCats(breedsId: string = '', count: number = 20): Observable<any[]> {
    return this.httpClient.get<any>(
      `${catAPI_URL}/images/search?limit=${count}&breed_ids=${breedsId}`,
    );
  }

  getCatBreeds(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${catAPI_URL}/breeds`);
  }
}

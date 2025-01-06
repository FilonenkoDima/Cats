import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catAPI_URL } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class CatHttpServiceService {
  private httpClient: HttpClient = inject(HttpClient);

  getBengCats(): Observable<any> {
    return this.httpClient.get<any>(
      `${catAPI_URL}/images/search?limit=5&breed_ids=beng`,
    );
  }
}

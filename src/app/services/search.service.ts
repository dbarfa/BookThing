import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  get(data: any): Observable<any> {
    console.log(data.q);

    return this.http.get<any>(
      'http://openlibrary.org/search.json?q=' +
        data.q +
        '&fields=cover_i,title,key,author_name&limit=50'
    );
  }
}

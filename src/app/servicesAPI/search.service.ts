import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registry } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  get(data: any): Observable<any> {
    return this.http.get<any>(
      'http://openlibrary.org/search.json?q=' +
        data.q +
        '&fields=cover_i,title,key,author_name,availability&limit=50'
    );
  }
  readbutton(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/read',data)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getAllRead(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/read/getall', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
      }),
    });
  }
  getAllToRead(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/toread/getall', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
      }),
    });
  }
  getBookData(data: string): Observable<any> {
    return this.http.get<any>('https://openlibrary.org' + data + '.json');
  }
}

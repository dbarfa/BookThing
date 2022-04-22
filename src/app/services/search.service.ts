import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from '../models/IBook';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  get(data: any) {
    return this.http.get('http://openlibrary.org/search.json?q=' + data.q);
  }
}

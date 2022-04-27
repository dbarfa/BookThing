import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Subject } from 'rxjs';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  token!: string;
  decodedToken!: Token;
  isLogged!: boolean;

  sessionChanged: Subject<any>;

  constructor() {
    this.sessionChanged = new Subject<any>();
    let token = localStorage.getItem('TOKEN');
    if (token) {
      this.save(token);
    }
  }

  save(token: string) {
    this.token = token;
    this.isLogged = true;
    this.decodedToken = jwtDecode(token);

    localStorage.setItem('TOKEN', token);
    this.sessionChanged.next(true);
  }
  clear() {
    this.token = ''; //or null but error
    this.isLogged = false;
    localStorage.removeItem('TOKEN');
    this.sessionChanged.next(true);
  }

  // to decode i hqve to use JWT decode
}

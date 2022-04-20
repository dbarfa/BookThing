import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginTestService {
  constructor() {}

  isLogged() {
    return true;
  }
}

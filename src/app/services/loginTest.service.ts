import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginTestService {
  loginThing: boolean = true;
  constructor() {}

  isLogged() {
    console.log(this.loginThing);

    return this.loginThing;
  }
  loginDemo() {
    this.loginThing = true;
    console.log(this.loginThing);
  }
}

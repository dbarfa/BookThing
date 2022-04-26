import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';
import { SignInComponent } from '../security/sign-in/sign-in.component';
import { SignUpComponent } from '../security/sign-up/sign-up.component';

@Injectable({
  providedIn: 'root',
})
export class LoginTestService {
  constructor(private _http: HttpClient) {}

  login(form: SignInComponent): Observable<Auth> {
    return this._http.post<Auth>('http://localhost:8000/api/login_check', form);
  }
  register(form: SignUpComponent) {
    console.log(form);

    return this._http.post('http://localhost:8000/api/user', form);
  }
}

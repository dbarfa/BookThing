import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';
import { SignInComponent } from '../security/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root',
})
export class LoginTestService {
  constructor(private _http: HttpClient) {}

  login(form: SignInComponent): Observable<Auth> {
    console.log('test here');

    return this._http.post<Auth>('http://localhost:8000/api/login_check', form);
  }
  
}

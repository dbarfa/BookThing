import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginTestService } from './loginTest.service';

@Injectable({
  providedIn: 'root',
})
export class CanLoginGuard implements CanActivate {
  constructor(private isLogged: LoginTestService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let logged = !this.isLogged.isLogged();
    if (!logged) {
      console.log('test1');

      this.router.navigate(['/home']);
    }
    return logged;
  }
}

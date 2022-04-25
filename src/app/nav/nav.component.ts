import { Component, OnInit } from '@angular/core';
import { LoginTestService } from '../services/loginTest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  logged: any = this.LoginTestService.isLogged;
  // checks if user is logged in
  constructor(
    private LoginTestService: SessionService,
    private router: Router,
    private session: SessionService,
  ) {}

  ngOnInit(): void {
    this.LoginTestService.sessionChanged.subscribe(
      () => (this.logged = this.LoginTestService.isLogged)
    );
  }

  test(text: string) {
    this.router.navigate(['search'], {
      queryParams: { q: text },
    });
  }
  logout() {
    this.session.clear();
  }
}

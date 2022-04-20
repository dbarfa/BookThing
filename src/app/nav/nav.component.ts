import { Component, OnInit } from '@angular/core';
import { LoginTestService } from '../services/loginTest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  logged: any = this.LoginTestService.isLogged();
  // checks if user is logged in
  constructor(
    private LoginTestService: LoginTestService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  test() {
    console.log('test');

    this.router.navigate(['/home']);
  }
}

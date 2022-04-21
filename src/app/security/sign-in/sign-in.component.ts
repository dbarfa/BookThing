import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginTestService } from 'src/app/services/loginTest.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private loginTest: LoginTestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      password: [null, [Validators.required]],
    });
  }
  demoLogin() {
    this.loginTest.loginDemo();
  }
}

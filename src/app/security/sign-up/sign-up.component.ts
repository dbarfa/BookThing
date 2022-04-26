import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginTestService } from 'src/app/services/loginTest.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private loginTest: LoginTestService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      gender: ['male', [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  showSuccess() {
    this.toastr.success('Plese sign-in', 'Registration complete!', {
      progressBar: true,
      closeButton: true,
    });
  }

  showFailure() {
    this.toastr.error('Please retry', 'Username taken', {
      progressBar: true,
      closeButton: true,
    });
  }

  adduser() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.loginTest.register(this.registerForm.value).subscribe({
      next: () => {
        this.showSuccess();
        this.router.navigate(['security/sign-in']);
      },
      error: () => {
        this.showFailure();
        console.log('username already in atabase, add toastr');
      },
    });
  }
}

// id: number;
//   username: string;
//   gender: string;
//   mail: string;
//   password: string;

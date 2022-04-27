import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginTestService } from 'src/app/services/loginTest.service';
import { SessionService } from 'src/app/services/session.service';

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
    private router: Router,
    private session: SessionService,
    private toastr: ToastrService
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

  showSuccess() {
    this.toastr.success(this.loginForm.value.username, 'Welcome!', {
      progressBar: true,
      closeButton: true,
    });
  }

  showError() {
    this.toastr.error('Bad Credentials', '', {
      progressBar: true,
      closeButton: true,
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    console.log('test' + this.loginForm.value);

    this.loginTest.login(this.loginForm.value).subscribe({
      next: (auth) => {
        this.session.save(auth.token);
        this.showSuccess();
        this.router.navigateByUrl('');
      },
      error: () => {
        this.showError();
      },
    });
  }
}

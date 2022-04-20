import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private _fb: FormBuilder) {}

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
  adduser() {
    if (this.registerForm.valid) {
      console.log('form is valid');
      console.log(this.registerForm.value.username);
      console.log(this.registerForm.value.email);
      console.log(this.registerForm.value.gender);
      console.log(this.registerForm.value.password);
    } else {
      console.log('not valid');
    }
  }
}

// id: number;
//   username: string;
//   gender: string;
//   mail: string;
//   password: string;

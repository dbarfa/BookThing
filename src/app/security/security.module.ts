import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SecurityComponent } from './security.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, SecurityComponent],
  imports: [CommonModule, SecurityRoutingModule, ReactiveFormsModule],
})
export class SecurityModule {}

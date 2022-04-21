import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';
import { CanLoginGuard } from './services/can-login.guard';
import { IsLoggedGuard } from './services/is-logged.guard';

const routes: Routes = [
  {
    path: 'security',
    canActivate: [CanLoginGuard],
    loadChildren: () =>
      import('./security/security.module').then((m) => m.SecurityModule),
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SecurityComponent } from './security/security.component';
import { CanLoginGuard } from './guards/can-login.guard';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { ProfileComponent } from './profile/profile.component';

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
    path: 'search',
    component: SearchComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

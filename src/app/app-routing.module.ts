import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {
    path: 'demo',
    component: SecurityComponent,
    loadChildren: () =>
      import('./security/security.module').then((m) => m.SecurityModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

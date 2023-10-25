import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AUTH_GUARD } from '../auth/auth-guard';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [ AUTH_GUARD ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }



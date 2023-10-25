import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AUTH_GUARD } from '../auth/auth-guard';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [ AUTH_GUARD ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }



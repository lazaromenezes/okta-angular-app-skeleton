import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard, AuthRoleGuard } from '../auth/auth-guard';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard, AuthRoleGuard ], data: {'roles': ['TestApp:Role:User']}}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }


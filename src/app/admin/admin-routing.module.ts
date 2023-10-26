import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard, AuthRoleGuard } from '../auth/auth-guard';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [ AuthGuard, AuthRoleGuard ], data: {'roles': ['TestApp:Role:Admin']}}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


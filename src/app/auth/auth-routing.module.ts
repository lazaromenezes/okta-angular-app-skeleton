import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { UnauthorizedComponent } from './unauthorized.component';

const routes: Routes = [
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'unauthorized', component: UnauthorizedComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


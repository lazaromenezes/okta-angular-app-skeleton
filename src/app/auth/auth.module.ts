import { NgModule } from '@angular/core';
import { OktaAuthModule, OktaConfig } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard, AuthRoleGuard } from './auth-guard';
import { AuthProfile, OktaAuthProfile } from './auth-profile'; 

const AUTH_CONFIG = {
  issuer: 'https://trial-2283582.okta.com/oauth2/default',
  clientId: '0oa8yjsqb5uBa1gep697',
  redirectUri: window.location.origin + '/login/callback'
};

const OKTA_AUTH = new OktaAuth(AUTH_CONFIG);

const MODULE_CONFIG: OktaConfig = { oktaAuth: OKTA_AUTH };

@NgModule({
  declarations: [
  ],
  imports: [
    AuthRoutingModule,
    OktaAuthModule.forRoot(MODULE_CONFIG)
  ],
  providers: [
    AuthGuard,
    AuthRoleGuard,
    { provide: AuthProfile, useClass: OktaAuthProfile }
  ]
})
export class AuthModule { 

}


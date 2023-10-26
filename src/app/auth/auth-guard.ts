import { Injectable } from '@angular/core';
import { OktaAuthGuard } from '@okta/okta-angular';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard {

  constructor(private oktaAuthGuard: OktaAuthGuard, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let canActivate = this.oktaAuthGuard.canActivate(route, state);

    return canActivate;
  }
}

//export const AUTH_GUARD = OktaAuthGuard;

import { Injectable } from '@angular/core';
import { OktaAuthGuard } from '@okta/okta-angular';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthProfile, UserProfile } from './auth-profile';
import { filter, map, Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard {

  constructor(private oktaAuthGuard: OktaAuthGuard, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.oktaAuthGuard.canActivate(route, state);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthRoleGuard {

  constructor(private router: Router, private authProfile: AuthProfile){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    debugger;

    return this.authProfile.userProfile$.pipe(
      filter((u: UserProfile) => !!u),
      map((u: UserProfile) => {
        let authorized = false;

        if(route.data['roles']) 
          authorized = route.data['roles'].some((g: any) => u.isInGroup(g))
          
        if(!authorized)
          this.router.navigate(['unauthorized']);

        return authorized;
      })
    );
  }
}

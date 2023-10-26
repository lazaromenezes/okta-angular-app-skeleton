import { Injectable } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { filter, map, Observable, of } from 'rxjs';
import { AuthState } from '@okta/okta-auth-js';

export class UserProfile {
  groups: any;
  organization: any;
  username: any;
  name: any;

  isInGroup(group: any) {
    if(this.groups) 
      return this.groups.includes(group);

    return false;
  }
}

export abstract class AuthProfile {
  userProfile$: Observable<UserProfile> = of(new UserProfile());
}

@Injectable({
  providedIn: 'root'
})
export class OktaAuthProfile implements AuthProfile{

  userProfile$: Observable<UserProfile>;

  constructor(private authStateService: OktaAuthStateService) {
    this.userProfile$ = this.authStateService.authState$.pipe(
      filter((s: AuthState) => !!s && !!s.isAuthenticated),
      map((s: AuthState) => this.mapAuthProfile(s))
    );
  }

  private mapAuthProfile(authState: AuthState): UserProfile {
    debugger;
    let idToken = authState.idToken

    var tempProfile = {
      username: idToken?.claims.preferred_username,
      name: idToken?.claims.name,
      organization: idToken?.claims['organization'],
      groups: idToken?.claims['groups']
    } as UserProfile;

    return Object.assign(new UserProfile(), tempProfile);
  }
}

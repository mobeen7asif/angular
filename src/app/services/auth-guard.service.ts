// this service is a guard which protect routes from unauthenticated users.

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  private router: Router;
  private currentRoute: ActivatedRoute;

  constructor(
    private appRouter: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router = appRouter;
    this.currentRoute = activatedRoute;
  }

  canActivate() {
    if (localStorage.getItem('user') !== '' && localStorage.getItem('user') != null) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user !== '' ||  user != null) {
        return true;
      } else {
        return false;
      }
    }
    this.router.navigate(['login']);
    return false;
  }
}

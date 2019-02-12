import { AuthenticationService } from './authentication.service';
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.authenticationService.isAuthenticated();
    if (this.authenticationService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
    }
  }
}

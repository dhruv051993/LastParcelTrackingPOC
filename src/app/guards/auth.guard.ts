import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard {
    constructor(private router: Router) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const userInfo: string = localStorage.getItem('userinfo');
        if (userInfo) {
            if (next.data.role === (JSON.parse(userInfo)).role) {
                return true;
            }
            return false;
        }
        this.router.navigateByUrl('/authentication/login');
        return false;
    }
}

import { Inject, Injectable } from '@angular/core';
import { CanLoad, Route, ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageMiddleware } from '../middlewares/local-storage-middleware';



@Injectable({providedIn: 'root'})
export class ProfileGuardService implements CanLoad, CanActivate {


    constructor(private localStorageMdw: LocalStorageMiddleware, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(!this.localStorageMdw.getProfile()){
            this.redirectToHome();
           return false;
        }
        return true;
    }

    canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
     if(!this.localStorageMdw.getProfile()){
         this.redirectToHome();
        return false;
     }
     return true;
    }


    redirectToHome(): void{
        this.router.navigate(['']);
    }

}
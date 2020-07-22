import { Inject, Injectable } from '@angular/core';
import { CanLoad, Route, ActivatedRoute, Router } from '@angular/router';
import { LocalStorageMiddleware } from '../middlewares/local-storage-middleware';



@Injectable({providedIn: 'root'})
export class ProfileGuardService implements CanLoad {


    constructor(private localStorageMdw: LocalStorageMiddleware, private router: Router){}

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
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private _AngularFireAuth: AngularFireAuth,
        private _Router: Router) { }

    public canActivate(): boolean {
        let user: any = sessionStorage.getItem('user');
        if (user) {
            try {
                user = JSON.parse(user);
                if (user && user.email && user.providerId) {
                    return true;
                }
            } catch (error) {
                console.log(error);
            }
        }
        this._Router.navigate(['login']);
        return false;
    }
}
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private _AngularFireAuth: AngularFireAuth,
        private _Router: Router) { }

    public canActivate(): boolean {
        if (!this._AngularFireAuth.auth.currentUser) {
            this._Router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
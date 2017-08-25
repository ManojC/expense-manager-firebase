import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private _AngularFireAuth: AngularFireAuth,
        private _Router: Router) { }

    public ngOnInit(): void {
        this._AngularFireAuth.authState.subscribe((user: firebase.User) => {
            if (user) {
                sessionStorage.setItem('user', JSON.stringify({
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId,
                    uid: user.uid
                }));
                this._Router.navigate(['/']);
            }
        });
    }

    private signIn(): void {
        this._AngularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
}
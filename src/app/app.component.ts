import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Expense } from "./models/expense";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private user: any;
    private expenses: Expense[] = [];
    private newExpense: Expense = new Expense();
    private valid: boolean = true;
    private dbList: FirebaseListObservable<any[]>;

    constructor(private _AngularFireAuth: AngularFireAuth,
        private _db: AngularFireDatabase) { }

    ngOnInit(): void {
        this._AngularFireAuth.authState.subscribe((user: firebase.User) => {
            if (user) {
                this.updateStorage(user);
                this.initialiseDatabase();
            }
        });
    }

    private save(): void {
        if (!Expense.validate(this.newExpense)) {
            return;
        }
        this.newExpense.addedOn = new Date().toLocaleString();
        this.newExpense.updatedOn = new Date().toLocaleString();
        this.newExpense.isDeleted = false;
        this.dbList.push(this.newExpense).then((response: any) => {
            this.newExpense.$key = response.key;
            this.saveLogs(this.newExpense);
            this.newExpense = new Expense();
        }).catch((error: any) => console.log(error));
    }

    private update(expense: Expense): void {
        if (Expense.validate(expense)) {
            expense.updatedOn = new Date().toLocaleString();
            expense.isDeleted = false;
            this.dbList.set(expense.$key, expense).then((response: any) => this.saveLogs(expense)).catch((error: any) => console.log(error));
        }
    }

    private delete(expense: Expense): void {
        if (!expense || !expense.$key) {
            return;
        }
        expense.isDeleted = true;
        // this.dbList.remove(expense.$key).then((response: any) => console.log(response)).catch((error: any) => console.log(error));
        this.dbList.set(expense.$key, expense).then((response: any) => this.saveLogs(expense)).catch((error: any) => console.log(error));
    }

    private saveLogs(expense: Expense): void {
        this._db.list(`/${this.user.uid}/logs/${expense.$key}`).push(Expense.getLogs(expense));
    }

    private initialiseDatabase(): void {
        if (this.user && this.user.uid) {
            this.dbList = this._db.list(`/${this.user.uid}/expenses`);
            this.dbList.subscribe((response: Expense[]) => {
                if (response && response.length) {
                    this.expenses = response.filter((item: Expense) => {
                        return !item.isDeleted;
                    });
                }
            });
        }
    }

    private signOut(): void {
        this._AngularFireAuth.auth.signOut().then((response: any) => {
            this.user = null;
            sessionStorage.removeItem('user');
        });
    }

    private signIn(): void {
        this._AngularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    private updateStorage(user: any): void {
        this.user = {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerId,
            uid: user.uid
        };
        sessionStorage.setItem('user', JSON.stringify(this.user));
    }
}
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Expense } from "./models/expense";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private expenses: Expense[] = [];
    private newExpense: Expense = new Expense();
    private valid: boolean = true;

    constructor(private _db: AngularFireDatabase) {
        this._db.list('/expenses').subscribe((response: Expense[]) => this.expenses = response);
    }

    private save() {
        Object.keys(this.newExpense).forEach((key: string) => this.valid = !!this.newExpense[key] && this.valid);
        this._db.list('/expenses').push(this.newExpense).then((response: any) => console.log(response)).catch((error: any) => console.log(error));
    }

    private edit(expense: Expense) {
        console.log(expense);
    }

    private delete(expense: Expense) {
        console.log(expense);
    }
}
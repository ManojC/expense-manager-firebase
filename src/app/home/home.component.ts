import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Expense } from "../models/expense";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private user: string = "";
    private expenses: Expense[] = [];
    private newExpense: Expense = new Expense();
    private valid: boolean = true;
    private dbList: FirebaseListObservable<any[]>;
    
    constructor(private _db: AngularFireDatabase) {
        let user: string = location.search;
        if (user.indexOf('?user=') >= 0) {
            this.user = user.split('?user=')[1];
        }
        if (this.user) {
            
            this.dbList = this._db.list(`/${this.user.trim().toLowerCase()}/expenses`);
            this.dbList.subscribe((response: Expense[]) => {
                if (response && response.length) {
                    this.expenses = response.filter((item: Expense) => {
                        return !item.isDeleted;
                    });
                }
            });
        }
    }

    public ngOnInit(): void {
        
    }
    
    private updateUser(event: any): void {
        if (!event.target.value) {
            return;
        }
        location.search = `user=${event.target.value.toLowerCase()}`;
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
        this._db.list(`/${this.user.trim().toLowerCase()}/logs/${expense.$key}`).push(Expense.getLogs(expense));
    }
}

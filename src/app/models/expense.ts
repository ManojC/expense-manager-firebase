export class Expense {
    public $key: string;
    public name : string;
    public amount : string;
    public description : string;
    public addedOn: string;
    public updatedOn: string;
    public isDeleted: boolean;

    public static validate(expense: Expense): boolean {
        return !!expense.name && !!expense.amount && !!expense.description;
    }

    public static getLogs(expense: Expense): string {
        if (!Expense.validate(expense)) {
            return null;
        }
        return `Name - ${expense.name}\nAmount - ${expense.amount}\nDescription - ${expense.description}\nAdded On ${expense.addedOn}\nUpdated On - ${expense.updatedOn}\nDeleted - ${expense.isDeleted}`;
    }
}
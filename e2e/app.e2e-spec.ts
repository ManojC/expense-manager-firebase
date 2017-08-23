import { ExpenseManagerFirebasePage } from './app.po';

describe('expense-manager-firebase App', () => {
  let page: ExpenseManagerFirebasePage;

  beforeEach(() => {
    page = new ExpenseManagerFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

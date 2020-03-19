import { NgShoppingAppPage } from './app.po';

describe('ng-shopping-app App', function() {
  let page: NgShoppingAppPage;

  beforeEach(() => {
    page = new NgShoppingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { TestAppWithNg4Page } from './app.po';

describe('test-app-with-ng4 App', () => {
  let page: TestAppWithNg4Page;

  beforeEach(() => {
    page = new TestAppWithNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

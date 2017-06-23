import { NgrxTestA1Page } from './app.po';

describe('ngrx-test-a1 App', () => {
  let page: NgrxTestA1Page;

  beforeEach(() => {
    page = new NgrxTestA1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

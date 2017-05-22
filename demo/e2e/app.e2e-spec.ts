import { NgxFoundation } from './app.po';

describe('ngx-foundation App', () => {
  let page: NgxFoundation;

  beforeEach(() => {
    page = new NgxFoundation();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

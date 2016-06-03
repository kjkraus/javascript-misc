import { JavascriptMiscPage } from './app.po';

describe('javascript-misc App', function() {
  let page: JavascriptMiscPage;

  beforeEach(() => {
    page = new JavascriptMiscPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('javascript-misc works!');
  });
});

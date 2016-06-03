export class JavascriptMiscPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('javascript-misc-app h1')).getText();
  }
}

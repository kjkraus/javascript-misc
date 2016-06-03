import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { JavascriptMiscAppComponent } from '../app/javascript-misc.component';

beforeEachProviders(() => [JavascriptMiscAppComponent]);

describe('App: JavascriptMisc', () => {
  it('should create the app',
      inject([JavascriptMiscAppComponent], (app: JavascriptMiscAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'javascript-misc works!\'',
      inject([JavascriptMiscAppComponent], (app: JavascriptMiscAppComponent) => {
    expect(app.title).toEqual('javascript-misc works!');
  }));
});

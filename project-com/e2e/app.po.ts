import { browser, element, by } from 'protractor';

export class ProjectComPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pc-root h1')).getText();
  }
}

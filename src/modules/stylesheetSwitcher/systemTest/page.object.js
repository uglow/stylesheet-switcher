'use strict';

class TestHarnessPage {

  constructor() {
    this.body = element(by.css('body'));
    this.heading = element(by.css('h1'));
    this.switcherLabel = element(by.css('test-component label'));
    this.switcher = element(by.css('test-component select'));
    this.switcherItems = element.all(by.css('test-component select > option'));
  }

  visit() {
    browser.get('/');
    browser.wait(protractor.until.elementLocated(by.css('test-component select')));
  }

  selectStylesheet(index) {
    this.switcherItems.get(index).click();
  }
}


module.exports = new TestHarnessPage();

'use strict';

describe('Test Stylesheet Switcher', () => {
  let page = require('./page.object');

  function expectDarkStyleSheet() {
    expect(page.switcher.getAttribute('value')).toEqual('Dark');
    expect(page.body.getCssValue('background-color')).toEqual('rgba(0, 0, 0, 1)');
    expect(page.heading.getCssValue('color')).toEqual('rgba(255, 255, 255, 1)');
  }

  function expectLightStyleSheet() {
    expect(page.switcher.getAttribute('value')).toEqual('Light');
    expect(page.body.getCssValue('background-color')).toEqual('rgba(255, 255, 255, 1)');
    expect(page.heading.getCssValue('color')).toEqual('rgba(0, 0, 0, 1)');
  }

  it('should list 2 stylesheets and have the correct properties', () => {
    page.visit();
    expect(page.heading.getText()).toEqual('Stylesheet Switcher (SSS)');
    expect(page.switcherLabel.getText()).toEqual('Theme:');

    expect(page.switcher.getAttribute('id')).toEqual('mySSS_select');

    expect(page.switcherItems.count()).toEqual(2);
    expect(page.switcherItems.get(0).getText()).toEqual('Dark');
    expect(page.switcherItems.get(1).getText()).toEqual('Light');
  });


  it('should show the page with the style from the first-listed stylesheet', () => {
    page.visit();

    expectDarkStyleSheet();
  });


  it('should change the page styles when the switcher changes values', () => {
    page.visit();

    page.selectStylesheet(1);
    expectLightStyleSheet();

    page.selectStylesheet(0);
    expectDarkStyleSheet();

    page.selectStylesheet(1);
    expectLightStyleSheet();
  });
});

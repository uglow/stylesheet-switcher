import StyleSheetSwitcher from '../stylesheetSwitcher/stylesheetSwitcher.html';

import './styles/app.styl';

let comp = new StyleSheetSwitcher({
  target: document.querySelector('test-component'),
  data: {
    id: 'mySSS',
    label: 'Theme:',
    stylesheets: [
      {label: 'Dark Link Element', linkHrefContains: 'dark'},
      {label: 'Light Link Element', linkHrefContains: 'light'},
      // These <style> blocks are inside index-template.html:
      {label: 'Red Style Element', styleElemContains: '/* red-style */'},
      {label: 'Green Style Element', styleElemContains: '/* green-style */'},
    ],
  },
});


comp.on('selectionChange', console.log);

// Hot module reloading for Webpack
if (module.hot) {
  module.hot.accept();
}

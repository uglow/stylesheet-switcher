import StyleSheetSwitcher from '../stylesheetSwitcher/stylesheetSwitcher.html';

import './styles/app.styl';

let comp = new StyleSheetSwitcher({
  target: document.querySelector('test-component'),
  data: {
    id: 'mySSS',
    label: 'Theme:',
    stylesheets: [
      {label: 'Dark', linkHrefContains: 'dark'},
      {label: 'Light', linkHrefContains: 'light'},
    ],
  },
});


comp.on('selectionChange', console.log);

// Hot module reloading for Webpack
if (module.hot) {
  module.hot.accept();
}

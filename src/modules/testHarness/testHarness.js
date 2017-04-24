import StyleSheetSwitcher from '../stylesheetSwitcher/stylesheetSwitcher.html';

import './styles/app.styl';

new StyleSheetSwitcher({
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


// Hot module reloading for Webpack
if (module.hot) {
  module.hot.accept();
}

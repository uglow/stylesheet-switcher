/**
 * @ngdoc directive
 *
 * @restrict A
 *
 * @name StylesheetSwitcher
 *
 * @example
 * <test-ssswitcher></test-ssswitcher>
 * <style>
 *   test-ssswitcher div {
 *     display: inline-block;
 *     background: yellow;
 *     padding: 5px;
 *     border-radius: 5px;
 *     box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 10px;
 *   }
 *   test-ssswitcher label {
 *     display: block;
 *     color: #000;
 *   }
 * </style>
 * <script src="dist/js/component.es5.js"></script>
 * <script>
 *   new window.StylesheetSwitcher.default({
 *     target: document.querySelector('test-ssswitcher'),
 *     data: {
 *       id: 'mySSS',
 *       label: 'Theme:',
 *       stylesheets: [
 *         {label: 'Dark', linkHrefContains: 'dark'},
 *         {label: 'Light', linkHrefContains: 'light'},
 *       ],
 *     },
 *   });
 * </script>
 *
 * @usage
 * ```html
 * <script>
 *   var comp = new StylesheetSwitcher({
 *     target: document.querySelector('test-ssswitcher'),
 *     data: {
 *       id: 'mySSS',
 *       label: 'Theme:',
 *       stylesheets: [
 *         {label: 'Light', linkHrefContains: 'light'},
 *         {label: 'Dark', linkHrefContains: 'dark'},
 *       ],
 *     },
 *   });
 *
 *   comp.on('selectionChange', console.log);
 *   comp.setSelected('Light');
 * </script>
 * <style>
 *   test-ssswitcher div {
 *     display: inline-block;
 *     background: yellow;
 *     padding: 5px;
 *     border-radius: 5px;
 *     box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 10px;
 *   }
 *   test-ssswitcher label {
 *     display: block;
 *     color: #000;
 *   }
 * </style>
 * ```
 *
 * @param {Object[]} stylesheets  - List of stylesheets to switch between
 * @param {string} stylesheets[].label  - The display name of the stylesheet
 * @param {string} stylesheets[].linkHrefContains  - A string that should appear withing the <link href="..."> attribute.
 *   Used to uniquely identify the <link> element so that the component can enable and disable it
 * @param {string=} [id=mySSS] - Id attribute of the component (in case you need to use multiple instances on the same page)
 * @param {string=} [label=Theme] - Label to display beside the component
 * @param {string=} [persistenceKeyName=__stylesheetSwitcher] - SessionStorage key name to persist selected option
 *
 * // In lieu of better documentation engine, document the API as "params", so that at least it shows up
 * @param {Function} setSelected() - Sets the selected value
 * @param {Function} getSelected() - Returns the selected value (the label of the selected stylesheet)
 *
 * @param {event} selectionChange - Returns an object with a `value` property set to the `label` of the selected stylesheet
 */


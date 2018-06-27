/**
 * @ngdoc directive
 *
 * @restrict A
 *
 * @name StylesheetSwitcher
 *
 * @example
 * <div class="test-switcher-example"></div>
 * <style>
 *   .test-switcher-example div {
 *     display: inline-block;
 *     background: yellow;
 *     padding: 5px;
 *     border-radius: 5px;
 *     box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 10px;
 *   }
 *   .test-switcher-example label {
 *     display: block;
 *     color: #000;
 *   }
 * </style>
 * <style>christmas {} body{background:#0d0} body,h1{color:#f00}</style>
 * <script src="dist/js/component.es5.js"></script>
 * <script>
 *   new window.StylesheetSwitcher.default({
 *     target: document.querySelector('.test-switcher-example'),
 *     data: {
 *       id: 'mySSS',
 *       label: 'Theme:',
 *       stylesheets: [
 *         {label: 'Light', linkHrefContains: 'light'},
 *         {label: 'Dark', linkHrefContains: 'dark'},
 *         {label: 'Christmas', styleElemContains: 'christmas'},
 *       ],
 *     },
 *   });
 * </script>
 *
 * @usage
 * ```html
 * <!-- nominate a HTML element which will host the switcher: -->
 * <div class="test-switcher"></div>
 *
 * <style>
 *   .test-switcher div {
 *     display: inline-block;
 *     background: yellow;
 *     padding: 5px;
 *     border-radius: 5px;
 *     box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 10px;
 *   }
 *   .test-switcher label {
 *     display: block;
 *     color: #000;
 *   }
 * </style>
 *
 * <style>christmas {} body{background:#0d0} body,h1{color:#f00}</style>
 *
 * ES5 example code:
 * <script src="path/to/dist/js/component.es5.js"></script>
 * <script>
 *   var comp = new StylesheetSwitcher({
 *     target: document.querySelector('.test-switcher'),
 *     data: {
 *       id: 'mySSS',
 *       label: 'Theme:',
 *       stylesheets: [
 *         {label: 'Light', styleElemContains: 'light'},
 *         {label: 'Dark', linkHrefContains: 'dark'},
 *         {label: 'Christmas', styleElemContains: 'christmas'},
 *       ],
 *     },
 *   });
 *
 *   comp.on('selectionChange', console.log);
 *   comp.setSelected('Light');
 * </script>
 *
 *
 * ES6 example code (inside "any-file.js"):
 * import stylesheetSwitcher from 'stylesheet-switcher';
 *
 * const comp = new StylesheetSwitcher({
 *   target: document.querySelector('.test-switcher'),
 *   data: {
 *     id: 'mySSS',
 *     label: 'Theme:',
 *     stylesheets: [
 *       {label: 'Light', styleElemContains: 'light'},
 *       {label: 'Dark', linkHrefContains: 'dark'},
 *     ],
 *   },
 * });
 *
 * comp.on('selectionChange', console.log);
 * comp.setSelected('Light');
 *
 * ```
 *
 * @param {Object[]} stylesheets  - List of stylesheets to switch between. These *must* be inside the &lt;head&gt; element.
 * @param {string} stylesheets[].label  - The display name of the stylesheet
 * @param {string} stylesheets[].linkHrefContains  - A string that should appear withing the &lt;link href="..."&gt; attribute.
 *   Used to identify the <link> element(s) that the component should enable and disable
 * @param {string} stylesheets[].styleElemContains  - A string that should appear withing &lt;style&gt; element(s).
 *   Best practice would be to include a comment at the top of the &lt;style&gt; element's content.
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


!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}({"../node_modules/svelte/shared.js":function(e,t,n){"use strict";function r(e,t){t.appendChild(e)}function s(e,t,n){t.insertBefore(e,n)}function i(e){e.parentNode.removeChild(e)}function o(e,t,n){for(var r=n;r<e.length;r+=1)e[r].destroy(t)}function a(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function u(){return document.createComment("")}function c(e,t,n){e.addEventListener(t,n,!1)}function f(e,t,n){e.removeEventListener(t,n,!1)}function h(e){for(var t=1;t<arguments.length;t+=1){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function d(e,t){return e!==t||e&&"object"==typeof e||"function"==typeof e}function _(e,t,n,r){for(var s in t)if(s in n){var i=n[s],o=r[s];if(d(i,o)){var a=t[s];if(!a)continue;for(var l=0;l<a.length;l+=1){var u=a[l];u.__calling||(u.__calling=!0,u.call(e,i,o),u.__calling=!1)}}}}function v(e){return e?this._state[e]:this._state}function p(e,t){var n=e in this._handlers&&this._handlers[e].slice();if(n)for(var r=0;r<n.length;r+=1)n[r].call(this,t)}function m(e,t,n){var r=n&&n.defer?this._observers.post:this._observers.pre;return(r[e]||(r[e]=[])).push(t),n&&!1===n.init||(t.__calling=!0,t.call(this,this._state[e]),t.__calling=!1),{cancel:function(){var n=r[e].indexOf(t);~n&&r[e].splice(n,1)}}}function g(e,t){if("teardown"===e)return this.on("destroy",t);var n=this._handlers[e]||(this._handlers[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}}function y(e){this._set(h({},e)),(this._root||this)._flush()}function b(){if(this._renderHooks)for(;this._renderHooks.length;){var e=this._renderHooks.pop();e.fn.call(e.context)}}n.d(t,"j",function(){return h}),n.d(t,"l",function(){return _}),n.d(t,"k",function(){return S}),n.d(t,"b",function(){return r}),n.d(t,"f",function(){return s}),n.d(t,"i",function(){return i}),n.d(t,"g",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"h",function(){return f});var S={get:v,fire:p,observe:m,on:g,set:y,_flush:b}},"./modules/stylesheetSwitcher/stylesheetSwitcher.html":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function s(e,t){function r(e){t.setSelected(h.value)}var s,o,l,u=n.i(a.a)("div"),c=n.i(a.a)("label");n.i(a.b)(c,u),c.htmlFor=s=e.id+"_select";var f=n.i(a.c)(o=e.label||"");n.i(a.b)(f,c),n.i(a.b)(n.i(a.c)("\n  "),u);var h=n.i(a.a)("select");n.i(a.b)(h,u),h.id=l=e.id+"_select",n.i(a.d)(h,"change",r),t.refs.selectElem=h;var d=n.i(a.e)();n.i(a.b)(d,h);for(var _=e.stylesheets,v=[],p=0;p<_.length;p+=1)v[p]=i(e,_,_[p],p,t),v[p].mount(h,d);return{mount:function(e,t){n.i(a.f)(u,e,t)},update:function(e,r){s!==(s=r.id+"_select")&&(c.htmlFor=s),o!==(o=r.label||"")&&(f.data=o),l!==(l=r.id+"_select")&&(h.id=l);var u=r.stylesheets;if("stylesheets"in e){for(var _=0;_<u.length;_+=1)v[_]?v[_].update(e,r,u,u[_],_):(v[_]=i(r,u,u[_],_,t),v[_].mount(d.parentNode,d));n.i(a.g)(v,!0,u.length),v.length=u.length}},destroy:function(e){n.i(a.h)(h,"change",r),t.refs.selectElem===h&&(t.refs.selectElem=null),n.i(a.g)(v,!1,0),e&&n.i(a.i)(u)}}}function i(e,t,r,s,i){var o,l,u=n.i(a.a)("option");u.__value=o=r.label,u.value=u.__value;var c=n.i(a.c)(l=r.label);return n.i(a.b)(c,u),{mount:function(e,t){n.i(a.f)(u,e,t)},update:function(e,t,n,r,s){o!==(o=r.label)&&(u.__value=o),u.value=u.__value,l!==(l=r.label)&&(c.data=l)},destroy:function(e){e&&n.i(a.i)(u)}}}function o(e){e=e||{},this.refs={},this._state=n.i(a.j)(l.data(),e.data),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=e._root,this._yield=e._yield,this._torndown=!1,this._fragment=s(this._state,this),e.target&&this._fragment.mount(e.target,null),e._root?e._root._renderHooks.push({fn:l.oncreate,context:this}):l.oncreate.call(this)}var a=n("../node_modules/svelte/shared.js"),l=function(){function e(e,t){window.sessionStorage.setItem(e,t)}function t(e){return window.sessionStorage.getItem(e)}var n=new Map;return{oncreate:function(){var e=this,r=t(this.get("persistenceKeyName"));this.observe("stylesheets",function(t){n.clear(),t.forEach(function(e){n.set(e.label,document.head.querySelector('link[rel="stylesheet"][href*="'+e.linkHrefContains+'"]'))}),r&&n.has(r)?e.setSelected(r):n.size>0&&e.setSelected(n.keys().next().value,!1)})},data:function(){return{stylesheets:[],label:"Stylesheet:",id:"sss_"+(new Date).getTime(),persistenceKeyName:"__stylesheetSwitcher"}},methods:{setSelected:function(t){var s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n.forEach(function(e,n){return e.disabled=n!==t}),e(this.get("persistenceKeyName"),t);var i=this.refs.selectElem;this.fire("selectionChange",{value:t}),s&&[].concat(r(i.options)).forEach(function(e,n){e.value===t&&(i.selectedIndex=n)})},getSelected:function(){var e=this.refs.selectElem;return e.options[e.selectedIndex].value}}}}();n.i(a.j)(o.prototype,l.methods,a.k),o.prototype._set=function(e){var t=this._state;this._state=n.i(a.j)({},t,e),n.i(a.l)(this,this._observers.pre,e,t),this._fragment&&this._fragment.update(e,this._state),n.i(a.l)(this,this._observers.post,e,t)},o.prototype.teardown=o.prototype.destroy=function(e){this.fire("destroy"),this._fragment.destroy(!1!==e),this._fragment=null,this._state={},this._torndown=!0},t.a=o},"./modules/testHarness/styles/app.styl":function(e,t){},"./modules/testHarness/testHarness.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./modules/stylesheetSwitcher/stylesheetSwitcher.html"),s=n("./modules/testHarness/styles/app.styl");n.n(s);new r.a({target:document.querySelector("test-component"),data:{id:"mySSS",label:"Theme:",stylesheets:[{label:"Dark",linkHrefContains:"dark"},{label:"Light",linkHrefContains:"light"}]}}).on("selectionChange",console.log)},3:function(e,t,n){e.exports=n("./modules/testHarness/testHarness.js")}});
//# sourceMappingURL=testHarness.js.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/leac";
exports.ids = ["vendor-chunks/leac"];
exports.modules = {

/***/ "(action-browser)/./node_modules/leac/lib/leac.mjs":
/*!****************************************!*\
  !*** ./node_modules/leac/lib/leac.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLexer: () => (/* binding */ o)\n/* harmony export */ });\nconst e=/\\n/g;function n(n){const o=[...n.matchAll(e)].map((e=>e.index||0));o.unshift(-1);const s=t(o,0,o.length);return e=>r(s,e)}function t(e,n,r){if(r-n==1)return{offset:e[n],index:n+1};const o=Math.ceil((n+r)/2),s=t(e,n,o),l=t(e,o,r);return{offset:s.offset,low:s,high:l}}function r(e,n){return function(e){return Object.prototype.hasOwnProperty.call(e,\"index\")}(e)?{line:e.index,column:n-e.offset}:r(e.high.offset<n?e.high:e.low,n)}function o(e,t=\"\",r={}){const o=\"string\"!=typeof t?t:r,l=\"string\"==typeof t?t:\"\",c=e.map(s),f=!!o.lineNumbers;return function(e,t=0){const r=f?n(e):()=>({line:0,column:0});let o=t;const s=[];e:for(;o<e.length;){let n=!1;for(const t of c){t.regex.lastIndex=o;const c=t.regex.exec(e);if(c&&c[0].length>0){if(!t.discard){const e=r(o),n=\"string\"==typeof t.replace?c[0].replace(new RegExp(t.regex.source,t.regex.flags),t.replace):c[0];s.push({state:l,name:t.name,text:n,offset:o,len:c[0].length,line:e.line,column:e.column})}if(o=t.regex.lastIndex,n=!0,t.push){const n=t.push(e,o);s.push(...n.tokens),o=n.offset}if(t.pop)break e;break}}if(!n)break}return{tokens:s,offset:o,complete:e.length<=o}}}function s(e,n){return{...e,regex:l(e,n)}}function l(e,n){if(0===e.name.length)throw new Error(`Rule #${n} has empty name, which is not allowed.`);if(function(e){return Object.prototype.hasOwnProperty.call(e,\"regex\")}(e))return function(e){if(e.global)throw new Error(`Regular expression /${e.source}/${e.flags} contains the global flag, which is not allowed.`);return e.sticky?e:new RegExp(e.source,e.flags+\"y\")}(e.regex);if(function(e){return Object.prototype.hasOwnProperty.call(e,\"str\")}(e)){if(0===e.str.length)throw new Error(`Rule #${n} (\"${e.name}\") has empty \"str\" property, which is not allowed.`);return new RegExp(c(e.str),\"y\")}return new RegExp(c(e.name),\"y\")}function c(e){return e.replace(/[-[\\]{}()*+!<=:?./\\\\^$|#\\s,]/g,\"\\\\$&\")}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9sZWFjL2xpYi9sZWFjLm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsY0FBYyxjQUFjLGdEQUFnRCxjQUFjLHdCQUF3QixpQkFBaUIsa0JBQWtCLGlCQUFpQix1QkFBdUIsaURBQWlELE9BQU8sOEJBQThCLGdCQUFnQixtQkFBbUIsdURBQXVELEtBQUssK0JBQStCLG1DQUFtQyxzQkFBc0IsRUFBRSxzRkFBc0YsdUJBQXVCLHFCQUFxQixnQkFBZ0IsRUFBRSxRQUFRLFdBQVcsT0FBTyxXQUFXLEVBQUUsU0FBUyxrQkFBa0Isb0JBQW9CLHdCQUF3QixxQkFBcUIsZUFBZSxnSEFBZ0gsUUFBUSxnRkFBZ0YsRUFBRSxvQ0FBb0Msb0JBQW9CLCtCQUErQixpQkFBaUIsT0FBTyxZQUFZLE9BQU8seUNBQXlDLGdCQUFnQixPQUFPLG1CQUFtQixnQkFBZ0IsOENBQThDLEdBQUcsd0NBQXdDLGVBQWUsdURBQXVELHVCQUF1QixtREFBbUQsU0FBUyxHQUFHLFNBQVMsa0RBQWtELG1EQUFtRCxVQUFVLGVBQWUscURBQXFELEtBQUssNkNBQTZDLEdBQUcsSUFBSSxPQUFPLHFEQUFxRCxnQ0FBZ0MsaUNBQWlDLGNBQWMseUJBQXlCLGdDQUF5RCIsInNvdXJjZXMiOlsiQzpcXEdpdEh1YlxcYWxleGlzLWJvbHRcXG5vZGVfbW9kdWxlc1xcbGVhY1xcbGliXFxsZWFjLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlPS9cXG4vZztmdW5jdGlvbiBuKG4pe2NvbnN0IG89Wy4uLm4ubWF0Y2hBbGwoZSldLm1hcCgoZT0+ZS5pbmRleHx8MCkpO28udW5zaGlmdCgtMSk7Y29uc3Qgcz10KG8sMCxvLmxlbmd0aCk7cmV0dXJuIGU9PnIocyxlKX1mdW5jdGlvbiB0KGUsbixyKXtpZihyLW49PTEpcmV0dXJue29mZnNldDplW25dLGluZGV4Om4rMX07Y29uc3Qgbz1NYXRoLmNlaWwoKG4rcikvMikscz10KGUsbixvKSxsPXQoZSxvLHIpO3JldHVybntvZmZzZXQ6cy5vZmZzZXQsbG93OnMsaGlnaDpsfX1mdW5jdGlvbiByKGUsbil7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxcImluZGV4XCIpfShlKT97bGluZTplLmluZGV4LGNvbHVtbjpuLWUub2Zmc2V0fTpyKGUuaGlnaC5vZmZzZXQ8bj9lLmhpZ2g6ZS5sb3csbil9ZnVuY3Rpb24gbyhlLHQ9XCJcIixyPXt9KXtjb25zdCBvPVwic3RyaW5nXCIhPXR5cGVvZiB0P3Q6cixsPVwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6XCJcIixjPWUubWFwKHMpLGY9ISFvLmxpbmVOdW1iZXJzO3JldHVybiBmdW5jdGlvbihlLHQ9MCl7Y29uc3Qgcj1mP24oZSk6KCk9Pih7bGluZTowLGNvbHVtbjowfSk7bGV0IG89dDtjb25zdCBzPVtdO2U6Zm9yKDtvPGUubGVuZ3RoOyl7bGV0IG49ITE7Zm9yKGNvbnN0IHQgb2YgYyl7dC5yZWdleC5sYXN0SW5kZXg9bztjb25zdCBjPXQucmVnZXguZXhlYyhlKTtpZihjJiZjWzBdLmxlbmd0aD4wKXtpZighdC5kaXNjYXJkKXtjb25zdCBlPXIobyksbj1cInN0cmluZ1wiPT10eXBlb2YgdC5yZXBsYWNlP2NbMF0ucmVwbGFjZShuZXcgUmVnRXhwKHQucmVnZXguc291cmNlLHQucmVnZXguZmxhZ3MpLHQucmVwbGFjZSk6Y1swXTtzLnB1c2goe3N0YXRlOmwsbmFtZTp0Lm5hbWUsdGV4dDpuLG9mZnNldDpvLGxlbjpjWzBdLmxlbmd0aCxsaW5lOmUubGluZSxjb2x1bW46ZS5jb2x1bW59KX1pZihvPXQucmVnZXgubGFzdEluZGV4LG49ITAsdC5wdXNoKXtjb25zdCBuPXQucHVzaChlLG8pO3MucHVzaCguLi5uLnRva2Vucyksbz1uLm9mZnNldH1pZih0LnBvcClicmVhayBlO2JyZWFrfX1pZighbilicmVha31yZXR1cm57dG9rZW5zOnMsb2Zmc2V0Om8sY29tcGxldGU6ZS5sZW5ndGg8PW99fX1mdW5jdGlvbiBzKGUsbil7cmV0dXJuey4uLmUscmVnZXg6bChlLG4pfX1mdW5jdGlvbiBsKGUsbil7aWYoMD09PWUubmFtZS5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKGBSdWxlICMke259IGhhcyBlbXB0eSBuYW1lLCB3aGljaCBpcyBub3QgYWxsb3dlZC5gKTtpZihmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsXCJyZWdleFwiKX0oZSkpcmV0dXJuIGZ1bmN0aW9uKGUpe2lmKGUuZ2xvYmFsKXRocm93IG5ldyBFcnJvcihgUmVndWxhciBleHByZXNzaW9uIC8ke2Uuc291cmNlfS8ke2UuZmxhZ3N9IGNvbnRhaW5zIHRoZSBnbG9iYWwgZmxhZywgd2hpY2ggaXMgbm90IGFsbG93ZWQuYCk7cmV0dXJuIGUuc3RpY2t5P2U6bmV3IFJlZ0V4cChlLnNvdXJjZSxlLmZsYWdzK1wieVwiKX0oZS5yZWdleCk7aWYoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLFwic3RyXCIpfShlKSl7aWYoMD09PWUuc3RyLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoYFJ1bGUgIyR7bn0gKFwiJHtlLm5hbWV9XCIpIGhhcyBlbXB0eSBcInN0clwiIHByb3BlcnR5LCB3aGljaCBpcyBub3QgYWxsb3dlZC5gKTtyZXR1cm4gbmV3IFJlZ0V4cChjKGUuc3RyKSxcInlcIil9cmV0dXJuIG5ldyBSZWdFeHAoYyhlLm5hbWUpLFwieVwiKX1mdW5jdGlvbiBjKGUpe3JldHVybiBlLnJlcGxhY2UoL1stW1xcXXt9KCkqKyE8PTo/Li9cXFxcXiR8I1xccyxdL2csXCJcXFxcJCZcIil9ZXhwb3J0e28gYXMgY3JlYXRlTGV4ZXJ9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/leac/lib/leac.mjs\n");

/***/ })

};
;
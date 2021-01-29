/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreateSelected2"] = factory();
	else
		root["CoCreateSelected2"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CoCreate-selected2.js":
/*!***********************************!*\
  !*** ./src/CoCreate-selected2.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ CoCreateSelected2\n/* harmony export */ });\n// listen click in canvas  to copy a said attribute to said attribute on the target\nfunction CoCreateSelected2(_ref) {\n  var sourceDocument = _ref.sourceDocument,\n      destDocument = _ref.destDocument,\n      wrap = _ref.wrap,\n      newValueCB = _ref.newValueCB,\n      elementSelector = _ref.elementSelector,\n      targetSelector = _ref.targetSelector,\n      source = _ref.source,\n      destination = _ref.destination,\n      _ref$type = _ref.type,\n      type = _ref$type === void 0 ? \"post\" : _ref$type,\n      _ref$eventType = _ref.eventType,\n      eventType = _ref$eventType === void 0 ? \"click\" : _ref$eventType;\n  sourceDocument.addEventListener(eventType, function (e) {\n    var element = e.target;\n\n    if (e.target.matches(elementSelector) && element.hasAttribute(source)) {\n      var targets = destDocument.querySelectorAll(targetSelector);\n      targets.forEach(function (target) {\n        var value = element.getAttribute(source);\n        if (wrap) value = wrap.replace(\"$1\", value);else if (newValueCB) value = newValueCB(element, target, value);\n        target.setAttribute(destination, value);\n      });\n    }\n\n    if (type === \"cut\") element.removeAttribute(source);\n  });\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZVNlbGVjdGVkMi8uL3NyYy9Db0NyZWF0ZS1zZWxlY3RlZDIuanM/YjhlZSJdLCJuYW1lcyI6WyJDb0NyZWF0ZVNlbGVjdGVkMiIsInNvdXJjZURvY3VtZW50IiwiZGVzdERvY3VtZW50Iiwid3JhcCIsIm5ld1ZhbHVlQ0IiLCJlbGVtZW50U2VsZWN0b3IiLCJ0YXJnZXRTZWxlY3RvciIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwidHlwZSIsImV2ZW50VHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZWxlbWVudCIsInRhcmdldCIsIm1hdGNoZXMiLCJoYXNBdHRyaWJ1dGUiLCJ0YXJnZXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ2YWx1ZSIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUllLFNBQVNBLGlCQUFULE9BV1Y7QUFBQSxNQVZEQyxjQVVDLFFBVkRBLGNBVUM7QUFBQSxNQVREQyxZQVNDLFFBVERBLFlBU0M7QUFBQSxNQVJEQyxJQVFDLFFBUkRBLElBUUM7QUFBQSxNQVBEQyxVQU9DLFFBUERBLFVBT0M7QUFBQSxNQU5EQyxlQU1DLFFBTkRBLGVBTUM7QUFBQSxNQUxEQyxjQUtDLFFBTERBLGNBS0M7QUFBQSxNQUpEQyxNQUlDLFFBSkRBLE1BSUM7QUFBQSxNQUhEQyxXQUdDLFFBSERBLFdBR0M7QUFBQSx1QkFGREMsSUFFQztBQUFBLE1BRkRBLElBRUMsMEJBRk0sTUFFTjtBQUFBLDRCQUREQyxTQUNDO0FBQUEsTUFEREEsU0FDQywrQkFEVyxPQUNYO0FBRURULGdCQUFjLENBQUNVLGdCQUFmLENBQWdDRCxTQUFoQyxFQUEyQyxVQUFDRSxDQUFELEVBQU87QUFDaEQsUUFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUNFLE1BQWhCOztBQUNBLFFBQUlGLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxPQUFULENBQWlCVixlQUFqQixLQUFxQ1EsT0FBTyxDQUFDRyxZQUFSLENBQXFCVCxNQUFyQixDQUF6QyxFQUF1RTtBQUNyRSxVQUFJVSxPQUFPLEdBQUdmLFlBQVksQ0FBQ2dCLGdCQUFiLENBQThCWixjQUE5QixDQUFkO0FBQ0FXLGFBQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFDTCxNQUFELEVBQVk7QUFDMUIsWUFBSU0sS0FBSyxHQUFHUCxPQUFPLENBQUNRLFlBQVIsQ0FBcUJkLE1BQXJCLENBQVo7QUFDQSxZQUFJSixJQUFKLEVBQVVpQixLQUFLLEdBQUdqQixJQUFJLENBQUNtQixPQUFMLENBQWEsSUFBYixFQUFtQkYsS0FBbkIsQ0FBUixDQUFWLEtBQ0ssSUFBSWhCLFVBQUosRUFBZ0JnQixLQUFLLEdBQUdoQixVQUFVLENBQUNTLE9BQUQsRUFBVUMsTUFBVixFQUFrQk0sS0FBbEIsQ0FBbEI7QUFDckJOLGNBQU0sQ0FBQ1MsWUFBUCxDQUFvQmYsV0FBcEIsRUFBaUNZLEtBQWpDO0FBQ0QsT0FMRDtBQU1EOztBQUVELFFBQUlYLElBQUksS0FBSyxLQUFiLEVBQW9CSSxPQUFPLENBQUNXLGVBQVIsQ0FBd0JqQixNQUF4QjtBQUNyQixHQWJEO0FBZUQ7QUFBQSIsImZpbGUiOiIuL3NyYy9Db0NyZWF0ZS1zZWxlY3RlZDIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaXN0ZW4gY2xpY2sgaW4gY2FudmFzICB0byBjb3B5IGEgc2FpZCBhdHRyaWJ1dGUgdG8gc2FpZCBhdHRyaWJ1dGUgb24gdGhlIHRhcmdldFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29DcmVhdGVTZWxlY3RlZDIoe1xuICAgIHNvdXJjZURvY3VtZW50LFxuICAgIGRlc3REb2N1bWVudCxcbiAgICB3cmFwLFxuICAgIG5ld1ZhbHVlQ0IsXG4gICAgZWxlbWVudFNlbGVjdG9yLFxuICAgIHRhcmdldFNlbGVjdG9yLFxuICAgIHNvdXJjZSxcbiAgICBkZXN0aW5hdGlvbixcbiAgICB0eXBlID0gXCJwb3N0XCIsXG4gICAgZXZlbnRUeXBlID0gXCJjbGlja1wiLFxuICB9KSB7XG5cbiAgICBzb3VyY2VEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhlbGVtZW50U2VsZWN0b3IpICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKHNvdXJjZSkpIHtcbiAgICAgICAgbGV0IHRhcmdldHMgPSBkZXN0RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRTZWxlY3Rvcik7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoc291cmNlKTtcbiAgICAgICAgICBpZiAod3JhcCkgdmFsdWUgPSB3cmFwLnJlcGxhY2UoXCIkMVwiLCB2YWx1ZSk7XG4gICAgICAgICAgZWxzZSBpZiAobmV3VmFsdWVDQikgdmFsdWUgPSBuZXdWYWx1ZUNCKGVsZW1lbnQsIHRhcmdldCwgdmFsdWUpXG4gICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShkZXN0aW5hdGlvbiwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09IFwiY3V0XCIpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHNvdXJjZSk7XG4gICAgfSk7XG5cbiAgfTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/CoCreate-selected2.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/CoCreate-selected2.js");
/******/ })()
.default;
});
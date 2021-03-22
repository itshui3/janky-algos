/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constructNumPerms.ts":
/*!**********************************!*\
  !*** ./src/constructNumPerms.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constructNumPerms\": () => (/* binding */ constructNumPerms)\n/* harmony export */ });\n/*\r\ngiven an array: [1, 2, 3, 4, 5, 6]\r\ndetermine if pieces can be concatenated in some order to match:\r\ntype A: [\r\n1, 3, 2, 5, 4, 6\r\n]\r\n\r\ntype B: [\r\n    [1, 2, 3],\r\n    [4, 5, 6]\r\n]\r\n*/\r\nvar constructNumPerms = function (array, pieces) {\r\n    var concatArr = [];\r\n    var result = reBuildAndCompare(concatArr, pieces, array);\r\n    console.log(result);\r\n};\r\nvar reBuildAndCompare = function (curArr, pieces, compare) {\r\n    if (!pieces.length) {\r\n        if (JSON.stringify(compare) === JSON.stringify(curArr)) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n    for (var i = 0; i < pieces.length; i++) {\r\n        var leftovers = pieces.slice(0, i).concat(pieces.slice(i + 1));\r\n        var nextArr = concatTwoParts(curArr, pieces[i]);\r\n        console.log(nextArr);\r\n        if (reBuildAndCompare(nextArr, leftovers, compare)) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n};\r\nvar concatTwoParts = function (base, build) {\r\n    if (typeof build === 'number') {\r\n        base = base.concat([build]);\r\n    }\r\n    else if (typeof build === 'object') {\r\n        base = base.concat(build);\r\n    }\r\n    ;\r\n    return base;\r\n};\r\n\n\n//# sourceURL=webpack://janky-algos/./src/constructNumPerms.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructNumPerms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructNumPerms */ \"./src/constructNumPerms.ts\");\n\r\nvar numsArr = [1, 2, 3, 4, 5, 6];\r\nvar testPieces0 = [6, 5, 4, 3, 2, 1];\r\nvar testPieces1 = [[1, 2, 3], [4, 5, 6]];\r\nvar testPieces2 = [1, [2, 3, 4], 5, 6];\r\nvar test0 = (0,_constructNumPerms__WEBPACK_IMPORTED_MODULE_0__.constructNumPerms)(numsArr, testPieces0);\r\nvar test1 = (0,_constructNumPerms__WEBPACK_IMPORTED_MODULE_0__.constructNumPerms)(numsArr, testPieces1);\r\nvar test2 = (0,_constructNumPerms__WEBPACK_IMPORTED_MODULE_0__.constructNumPerms)(numsArr, testPieces2);\r\nconsole.log(test0);\r\nconsole.log(test1);\r\nconsole.log(test2);\r\n\n\n//# sourceURL=webpack://janky-algos/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
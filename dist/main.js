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

/***/ "./src/createPage.js":
/*!***************************!*\
  !*** ./src/createPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst plus = document.querySelector(\".plus\");\r\nconst inputConteiner = document.querySelector(\".inputConteiner\");\r\n\r\nfunction createPage() {\r\n    plus.addEventListener(\"click\", function () {\r\n        inputConteiner.style.display = \"flex\";\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\r\n\n\n//# sourceURL=webpack://simple-todo/./src/createPage.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst AddBtn = document.querySelector(\".AddBtn\");\r\nconst todoLists = document.querySelector(\".todoLists\");\r\n\r\nfunction addContent() {\r\n\r\n    AddBtn.addEventListener(\"click\", function () {\r\n\r\n        const pageContent = document.createElement(\"div\");\r\n\r\n        const input = document.querySelector(\"#input\");\r\n        const inputValue = document.createElement(\"h1\");\r\n        if(input.value !== \"\"){\r\n            inputValue.innerHTML = input.value.toUpperCase();\r\n        }\r\n        else{\r\n            inputValue.textContent = \"Name?\";\r\n        }\r\n        \r\n        const deleteBtn = document.createElement(\"button\");\r\n        deleteBtn.textContent = \"Delete\";\r\n\r\n        // adding event on delete button\r\n        deleteBtn.addEventListener(\"click\", function (e) {\r\n            const parentDiv = e.target.parentElement;\r\n            parentDiv.remove();\r\n        });\r\n\r\n        // adding class\r\n        pageContent.setAttribute(\"class\", \"pageContent\");\r\n        inputValue.setAttribute(\"class\", \"inputValue\");\r\n        deleteBtn.setAttribute(\"class\", \"deleteBtn\");\r\n\r\n        // appending elements\r\n        pageContent.appendChild(inputValue);\r\n        pageContent.appendChild(deleteBtn);\r\n        todoLists.appendChild(pageContent);\r\n\r\n        // erasing  values\r\n        input.value = \"\";\r\n        \r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addContent);\r\n\n\n//# sourceURL=webpack://simple-todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPage.js */ \"./src/createPage.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\n(0,_createPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://simple-todo/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/du/dev/countdown/src/index.js: Unexpected token, expected \\\",\\\" (83:0)\\n\\n\\u001b[0m \\u001b[90m 81 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 82 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 83 | \\u001b[39m\\u001b[36mvar\\u001b[39m bar \\u001b[33m=\\u001b[39m \\u001b[36mnew\\u001b[39m \\u001b[33mProgressBar\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mCircle\\u001b[39m(container\\u001b[33m,\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 84 | \\u001b[39m    duration\\u001b[33m:\\u001b[39m duration\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 85 | \\u001b[39m    svgStyle\\u001b[33m:\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 86 | \\u001b[39m        display\\u001b[33m:\\u001b[39m \\u001b[32m'block'\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:6930:17)\\n    at Parser.unexpected (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:8323:16)\\n    at Parser.expect (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:8309:28)\\n    at Parser.parseCallExpressionArguments (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:9342:14)\\n    at Parser.parseSubscript (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:9270:29)\\n    at Parser.parseSubscripts (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:9186:19)\\n    at Parser.parseExprSubscripts (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:9175:17)\\n    at Parser.parseMaybeUnary (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:9145:21)\\n    at Parser.parseExprOps (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:9011:23)\\n    at Parser.parseMaybeConditional (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:8984:23)\\n    at Parser.parseMaybeAssign (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:8930:21)\\n    at Parser.parseExpression (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:8880:23)\\n    at Parser.parseStatementContent (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:10740:23)\\n    at Parser.parseStatement (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:10611:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:11187:25)\\n    at Parser.parseBlockBody (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:11174:10)\\n    at Parser.parseTopLevel (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:10542:10)\\n    at Parser.parse (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:12051:10)\\n    at parse (/Users/du/dev/countdown/node_modules/@babel/parser/lib/index.js:12102:38)\\n    at parser (/Users/du/dev/countdown/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\\n    at normalizeFile (/Users/du/dev/countdown/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\\n    at runSync (/Users/du/dev/countdown/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at transformSync (/Users/du/dev/countdown/node_modules/@babel/core/lib/transform.js:43:38)\\n    at Object.transform (/Users/du/dev/countdown/node_modules/@babel/core/lib/transform.js:22:38)\\n    at transpile (/Users/du/dev/countdown/node_modules/babel-loader/lib/index.js:50:20)\\n    at Object.module.exports (/Users/du/dev/countdown/node_modules/babel-loader/lib/index.js:173:20)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
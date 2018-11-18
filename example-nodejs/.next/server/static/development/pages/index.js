module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ContractTest.js":
/*!************************************!*\
  !*** ./components/ContractTest.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/steven.yuan/dev/ethaddressbook/example-nodejs/components/ContractTest.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, "Contract Test Code", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }), "Current Address: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "current-address",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), "Current Hash for Address: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "hash-for-address",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    id: "store-swarm-data",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Text to store:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    name: "message",
    rows: "10",
    cols: "30",
    id: "data-to-encrypt",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), "Enter Password:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    name: "message",
    type: "password",
    id: "encrypt-password",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "button-box",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "encrypt",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Encrypt")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    id: "encrypted-text",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Stored Text:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    name: "message",
    rows: "10",
    cols: "30",
    id: "stored-text-box",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), "Enter Password:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    name: "message",
    type: "password",
    id: "decrypt-password",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "button-box",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "get-address-book",
    className: "jsx-1132242761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Get Book")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1132242761",
    css: "#button-box.jsx-1132242761{margin:20px 0;width:100px;height:40px;color:white;background-color:black;text-align:center;display:inline-block;cursor:pointer;}#button-box.jsx-1132242761 span.jsx-1132242761{display:inline-block;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW4ueXVhbi9kZXYvZXRoYWRkcmVzc2Jvb2svZXhhbXBsZS1ub2RlanMvY29tcG9uZW50cy9Db250cmFjdFRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJnQixBQUd1QixBQVVPLGNBVFQsT0FVVSxLQVRWLFlBQ0EsS0FTZCxPQVJ5Qix1QkFDTCxrQkFDRyxxQkFDTixlQUNqQiIsImZpbGUiOiIvVXNlcnMvc3RldmVuLnl1YW4vZGV2L2V0aGFkZHJlc3Nib29rL2V4YW1wbGUtbm9kZWpzL2NvbXBvbmVudHMvQ29udHJhY3RUZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIENvbnRyYWN0IFRlc3QgQ29kZTxiciAvPjxiciAvPlxuXG4gICAgQ3VycmVudCBBZGRyZXNzOiA8ZGl2IGlkPVwiY3VycmVudC1hZGRyZXNzXCI+PC9kaXY+PGJyIC8+XG4gICAgQ3VycmVudCBIYXNoIGZvciBBZGRyZXNzOiA8ZGl2IGlkPVwiaGFzaC1mb3ItYWRkcmVzc1wiPjwvZGl2PjxiciAvPjxiciAvPlxuXG4gICAgPGZvcm0gaWQ9XCJzdG9yZS1zd2FybS1kYXRhXCI+XG4gICAgICBUZXh0IHRvIHN0b3JlOjxiciAvPjx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCIxMFwiIGNvbHM9XCIzMFwiIGlkPVwiZGF0YS10by1lbmNyeXB0XCI+PC90ZXh0YXJlYT48YnIgLz5cbiAgICAgIEVudGVyIFBhc3N3b3JkOjxiciAvPjxpbnB1dCBuYW1lPVwibWVzc2FnZVwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiZW5jcnlwdC1wYXNzd29yZFwiIC8+XG4gICAgPC9mb3JtPlxuXG4gICAgPGRpdiBpZD1cImJ1dHRvbi1ib3hcIj5cbiAgICAgIDxzcGFuIGlkPVwiZW5jcnlwdFwiPkVuY3J5cHQ8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8Zm9ybSBpZD1cImVuY3J5cHRlZC10ZXh0XCI+XG4gICAgICBTdG9yZWQgVGV4dDo8YnIgLz48dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiMTBcIiBjb2xzPVwiMzBcIiBpZD1cInN0b3JlZC10ZXh0LWJveFwiPjwvdGV4dGFyZWE+PGJyIC8+XG4gICAgICBFbnRlciBQYXNzd29yZDo8YnIgLz48aW5wdXQgbmFtZT1cIm1lc3NhZ2VcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImRlY3J5cHQtcGFzc3dvcmRcIiAvPlxuICAgIDwvZm9ybT5cblxuICAgIDxkaXYgaWQ9XCJidXR0b24tYm94XCI+XG4gICAgICA8c3BhbiBpZD1cImdldC1hZGRyZXNzLWJvb2tcIj5HZXQgQm9vazwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjYnV0dG9uLWJveCAge1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAjYnV0dG9uLWJveCBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbikgIl19 */\n/*@ sourceURL=/Users/steven.yuan/dev/ethaddressbook/example-nodejs/components/ContractTest.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/steven.yuan/dev/ethaddressbook/example-nodejs/components/Header.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return (//Todo: Implement Serverside Web3 Handling
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "/static/web3.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "/static/ethaddressbook.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "/static/swarmHash.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }))
  );
});

/***/ }),

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/steven.yuan/dev/ethaddressbook/example-nodejs/components/Main.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-538310764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "538310764",
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW4ueXVhbi9kZXYvZXRoYWRkcmVzc2Jvb2svZXhhbXBsZS1ub2RlanMvY29tcG9uZW50cy9NYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVnQiIsImZpbGUiOiIvVXNlcnMvc3RldmVuLnl1YW4vZGV2L2V0aGFkZHJlc3Nib29rL2V4YW1wbGUtbm9kZWpzL2NvbXBvbmVudHMvTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC8vIGRpdiB7XG4gICAgICAvLyAgIGNvbG9yOiBibHVlO1xuICAgICAgLy8gfVxuICAgIGB9PC9zdHlsZT5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=/Users/steven.yuan/dev/ethaddressbook/example-nodejs/components/Main.js */",
    __self: this
  }), props.children);
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Main.js */ "./components/Main.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_ContractTest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContractTest.js */ "./components/ContractTest.js");
var _jsxFileName = "/Users/steven.yuan/dev/ethaddressbook/example-nodejs/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContractTest_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
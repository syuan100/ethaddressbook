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
var _jsxFileName = "/Users/steven.yuan/dev/ethaddressbook/example/components/ContractTest.js";


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
    css: "#button-box.jsx-1132242761{margin:20px 0;width:100px;height:40px;color:white;background-color:black;text-align:center;display:inline-block;cursor:pointer;}#button-box.jsx-1132242761 span.jsx-1132242761{display:inline-block;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW4ueXVhbi9kZXYvZXRoYWRkcmVzc2Jvb2svZXhhbXBsZS9jb21wb25lbnRzL0NvbnRyYWN0VGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmdCLEFBR3VCLEFBVU8sY0FUVCxPQVVVLEtBVFYsWUFDQSxLQVNkLE9BUnlCLHVCQUNMLGtCQUNHLHFCQUNOLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zdGV2ZW4ueXVhbi9kZXYvZXRoYWRkcmVzc2Jvb2svZXhhbXBsZS9jb21wb25lbnRzL0NvbnRyYWN0VGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICBDb250cmFjdCBUZXN0IENvZGU8YnIgLz48YnIgLz5cblxuICAgIEN1cnJlbnQgQWRkcmVzczogPGRpdiBpZD1cImN1cnJlbnQtYWRkcmVzc1wiPjwvZGl2PjxiciAvPlxuICAgIEN1cnJlbnQgSGFzaCBmb3IgQWRkcmVzczogPGRpdiBpZD1cImhhc2gtZm9yLWFkZHJlc3NcIj48L2Rpdj48YnIgLz48YnIgLz5cblxuICAgIDxmb3JtIGlkPVwic3RvcmUtc3dhcm0tZGF0YVwiPlxuICAgICAgVGV4dCB0byBzdG9yZTo8YnIgLz48dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiMTBcIiBjb2xzPVwiMzBcIiBpZD1cImRhdGEtdG8tZW5jcnlwdFwiPjwvdGV4dGFyZWE+PGJyIC8+XG4gICAgICBFbnRlciBQYXNzd29yZDo8YnIgLz48aW5wdXQgbmFtZT1cIm1lc3NhZ2VcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImVuY3J5cHQtcGFzc3dvcmRcIiAvPlxuICAgIDwvZm9ybT5cblxuICAgIDxkaXYgaWQ9XCJidXR0b24tYm94XCI+XG4gICAgICA8c3BhbiBpZD1cImVuY3J5cHRcIj5FbmNyeXB0PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGZvcm0gaWQ9XCJlbmNyeXB0ZWQtdGV4dFwiPlxuICAgICAgU3RvcmVkIFRleHQ6PGJyIC8+PHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgcm93cz1cIjEwXCIgY29scz1cIjMwXCIgaWQ9XCJzdG9yZWQtdGV4dC1ib3hcIj48L3RleHRhcmVhPjxiciAvPlxuICAgICAgRW50ZXIgUGFzc3dvcmQ6PGJyIC8+PGlucHV0IG5hbWU9XCJtZXNzYWdlXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJkZWNyeXB0LXBhc3N3b3JkXCIgLz5cbiAgICA8L2Zvcm0+XG5cbiAgICA8ZGl2IGlkPVwiYnV0dG9uLWJveFwiPlxuICAgICAgPHNwYW4gaWQ9XCJnZXQtYWRkcmVzcy1ib29rXCI+R2V0IEJvb2s8L3NwYW4+XG4gICAgPC9kaXY+XG5cblxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI2J1dHRvbi1ib3ggIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgI2J1dHRvbi1ib3ggc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9kaXY+XG4pICJdfQ== */\n/*@ sourceURL=/Users/steven.yuan/dev/ethaddressbook/example/components/ContractTest.js */",
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
var _jsxFileName = "/Users/steven.yuan/dev/ethaddressbook/example/components/Header.js";

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
var _jsxFileName = "/Users/steven.yuan/dev/ethaddressbook/example/components/Main.js";


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
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW4ueXVhbi9kZXYvZXRoYWRkcmVzc2Jvb2svZXhhbXBsZS9jb21wb25lbnRzL01haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWdCIiwiZmlsZSI6Ii9Vc2Vycy9zdGV2ZW4ueXVhbi9kZXYvZXRoYWRkcmVzc2Jvb2svZXhhbXBsZS9jb21wb25lbnRzL01haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAvLyBkaXYge1xuICAgICAgLy8gICBjb2xvcjogYmx1ZTtcbiAgICAgIC8vIH1cbiAgICBgfTwvc3R5bGU+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/steven.yuan/dev/ethaddressbook/example/components/Main.js */",
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
var _jsxFileName = "/Users/steven.yuan/dev/ethaddressbook/example/pages/index.js";




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
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

/***/ "./components/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./components/pagination/pagination.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.scss */ "./components/pagination/pagination.scss");
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pagination_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\zamplus\\project\\react-blog-starter\\components\\pagination\\pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Pagination extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      pageCurr: 1
    };
  }

  create() {
    const {
      totalPage
    } = this.props.config;
    const {
      pageCurr
    } = this.state;
    let pages = [];

    if (totalPage <= 10) {
      pages.push(__jsx("li", {
        onClick: this.goPrev.bind(this),
        className: this.state.pageCurr === 1 ? _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nomore : "",
        key: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "\u4E0A\u4E00\u9875"));

      for (let i = 1; i <= totalPage; i++) {
        pages.push(__jsx("li", {
          onClick: this.go.bind(this, i),
          className: pageCurr === i ? _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : "",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, i));
      }

      pages.push(__jsx("li", {
        onClick: this.goNext.bind(this),
        className: this.state.pageCurr === totalPage ? _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nomore : "",
        key: totalPage + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "\u4E0B\u4E00\u9875"));
    } else {
      pages.push(__jsx("li", {
        className: this.state.pageCurr === 1 ? _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nomore : "",
        key: 0,
        onClick: this.goPrev.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\u4E0A\u4E00\u9875"));

      for (let i = 1; i <= 7; i++) {
        pages.push(__jsx("li", {
          className: this.state.pageCurr === i ? _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : "",
          key: i,
          onClick: this.go.bind(this, i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, i));
      }

      pages.push(__jsx("li", {
        className: _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ellipsis,
        key: -1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\xB7\xB7\xB7"));
      pages.push(__jsx("li", {
        className: this.state.pageCurr === totalPage - 1 ? _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : "",
        key: totalPage - 1,
        onClick: this.go.bind(this, totalPage - 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, totalPage - 1));
      pages.push(__jsx("li", {
        className: this.state.pageCurr === totalPage ? _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : "",
        key: totalPage,
        onClick: this.go.bind(this, totalPage),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, totalPage));
      pages.push(__jsx("li", {
        className: this.state.pageCurr === totalPage ? _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nomore : "",
        key: totalPage + 1,
        onClick: this.goNext.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u4E0B\u4E00\u9875"));
    }

    return pages;
  }

  go(pageCurr) {
    this.setState({
      pageCurr
    });
  }

  goPrev() {
    let {
      pageCurr
    } = this.state;
    this.go(--pageCurr);
  }

  goNext() {
    let {
      pageCurr
    } = this.state;
    this.go(++pageCurr);
  }

  render() {
    const Pages = this.create.bind(this)();
    return __jsx("div", {
      className: _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("ul", {
      className: _pagination_scss__WEBPACK_IMPORTED_MODULE_1___default.a.page,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, Pages));
  }

}

/***/ }),

/***/ "./components/pagination/pagination.scss":
/*!***********************************************!*\
  !*** ./components/pagination/pagination.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "_2v3kJ_UWCY0RpXKgeIWPAy",
	"page": "_14vQe4WpGOMztC0rMAFwSf",
	"active": "_7w9LlGCP5PWDiaHSbcqj4",
	"没有上一页下一页": "o9AOH-ytMbGc7HcCg6vYu",
	"nomore": "doAqDUYe3qHsoD0HLeR4_",
	"ellipsis": "_1CZz5amkvcUJENey9ol_l8"
};

/***/ }),

/***/ "./pages/page.js":
/*!***********************!*\
  !*** ./pages/page.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pagination/pagination */ "./components/pagination/pagination.js");
var _jsxFileName = "C:\\Users\\zamplus\\project\\react-blog-starter\\pages\\page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("article", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx(_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: {
        totalPage: 27
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/page.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zamplus\project\react-blog-starter\pages\page.js */"./pages/page.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=page.js.map
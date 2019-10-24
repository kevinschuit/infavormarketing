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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "react-parallax");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevinschuit/Ontwikkeling/Klanten/InFavor marketing/repository/infavormarketing/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* visit https://www.npmjs.com/package/react-parallax for more configurations */

/*  */

function Header({
  data
}) {
  const imgUrl = data.featuredMedia.link;
  const slogan = data.data.acf.slogan;
  return __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_1__["Parallax"], {
    className: "header__parallax",
    bgImage: imgUrl ? imgUrl : 'fallbackImg',
    strength: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    style: {
      height: 500
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "header__slogan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, slogan)))));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/styles.scss */ "./scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kevinschuit/Ontwikkeling/Klanten/InFavor marketing/repository/infavormarketing/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Layout(props) {
  return __jsx("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), props.data.featuredMedia ? __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }) : __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), props.children);
}

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/logo.png */ "./static/images/logo.png");
/* harmony import */ var _static_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/kevinschuit/Ontwikkeling/Klanten/InFavor marketing/repository/infavormarketing/components/Navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Navigation extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      scrollTop: 0,
      navigationActive: false,
      pagesLoaded: false,
      menu: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleScrollPosition", () => {
      if (!this.state.navigationActive) {
        this.setState({
          scrollTop: document.documentElement.scrollTop
        });
        setTimeout(function () {
          document.documentElement.style.position = 'fixed';
        }, 750);
      } else {
        document.documentElement.style.position = 'initial';
        document.documentElement.scrollTop = this.state.scrollTop;
      }

      this.setState({
        navigationActive: this.state.navigationActive ? false : true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getSlug", string => {
      var parts = string.split("/");
      return parts[parts.length - 1];
    });
  }

  async componentDidMount() {
    const menu = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://www.infavormarketing.nl/wordpress/wp-json/menus/v1/menus/menu');
    this.setState({
      menu: menu.data.items
    });
  }

  render() {
    const {
      menu
    } = this.state;
    return __jsx("div", {
      className: "navigation-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("input", {
      type: "checkbox",
      id: "navigation-checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("label", {
      className: "navigation-trigger",
      htmlFor: "navigation-checkbox",
      onClick: this.handleScrollPosition.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: "hamburger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "hamburger__bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("img", {
      src: _static_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "Logo",
      className: "navigation-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))), __jsx("div", {
      className: "navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, this.state.menu ? menu.map(item => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      as: `/${item.title.replace(/\s+/g, '-').toLowerCase()}`,
      href: `/[slug]`,
      key: item.ID,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("a", {
      className: "navigation__link",
      onClick: () => {
        document.getElementById('navigation-checkbox').checked = false;
        if (this.state.navigationActive) this.handleScrollPosition();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, item.title))) : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Loading..")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/PageWrapper.js":
/*!***********************************!*\
  !*** ./components/PageWrapper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/Meta */ "./components/common/Meta.js");
var _jsxFileName = "/Users/kevinschuit/Ontwikkeling/Klanten/InFavor marketing/repository/infavormarketing/components/PageWrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PageWrapper(props) {
  return __jsx("div", {
    className: "page__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_common_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: props.data.yoast_meta ? props.data.yoast_meta : props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.data.title.rendered), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.data.content.rendered
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/common/Meta.js":
/*!***********************************!*\
  !*** ./components/common/Meta.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevinschuit/Ontwikkeling/Klanten/InFavor marketing/repository/infavormarketing/components/common/Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Meta(props) {
  const {
    data
  } = props;
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, generateMeta(data));
}

/* harmony default export */ __webpack_exports__["default"] = (Meta);

function generateMeta(data) {
  let metadata = [];
  data.forEach((meta, index) => {
    if (meta.name) {
      metadata.push(__jsx("meta", {
        name: meta.name,
        content: meta.content,
        key: `meta-${index}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }));
    }

    if (meta.property) {
      if (meta.property === 'og:url') {
        meta.content = meta.content.replace("/wordpress", "");
      }

      metadata.push(__jsx("meta", {
        property: meta.property,
        content: meta.content,
        key: `meta-${index}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
      if (meta.property === 'og:title') metadata.push(__jsx("title", {
        key: `title-${index}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, meta.content));
    }
  });
  return metadata;
}

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let wpUrl = 'https://www.infavormarketing.nl/wordpress/wp-json';
const Config = {
  apiUrl: wpUrl,
  AUTH_TOKEN: 'auth-token',
  USERNAME: 'username'
};
/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageWrapper */ "./components/PageWrapper.js");
/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wpapi */ "wpapi");
/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wpapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/kevinschuit/Ontwikkeling/Klanten/InFavor marketing/repository/infavormarketing/pages/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const wp = new wpapi__WEBPACK_IMPORTED_MODULE_3___default.a({
  endpoint: _config__WEBPACK_IMPORTED_MODULE_4__["default"].apiUrl
});

const Page = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  data: props,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
  data: props.data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

Page.getInitialProps = async function (context) {
  let {
    slug
  } = context.query;
  const data = await wp.pages().slug(slug).embed().then(data => {
    return data[0];
  });

  if (data.featured_media > 0) {
    const id = data.featured_media;
    const featuredMedia = await wp.media().id(id);
    /*.id(page.featured_image);*/

    return {
      data,
      featuredMedia
    };
  }

  return {
    data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/images/logo.png":
/*!********************************!*\
  !*** ./static/images/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAACUCAYAAABoZ2lmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHgGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA5LTAxVDAxOjEyOjIxKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA5LTAxVDAxOjEyOjIxKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOS0wMVQwMToxMjoyMSswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NmVkNmIxMy03NzIzLTQyODMtYmE2OS0xNzUyNGQzOTRiYjQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozOGE5YWNlOS03ODhiLWYzNDktYWQzNi04MTA5ODE5NWYwZjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1OTM1MzIyZS0wMjUxLTRkMzYtOTM1ZC03NjM1NzQ2MTBkY2MiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5MzUzMjJlLTAyNTEtNGQzNi05MzVkLTc2MzU3NDYxMGRjYyIgc3RFdnQ6d2hlbj0iMjAxOS0wOS0wMVQwMToxMjoyMSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc2ZWQ2YjEzLTc3MjMtNDI4My1iYTY5LTE3NTI0ZDM5NGJiNCIgc3RFdnQ6d2hlbj0iMjAxOS0wOS0wMVQwMToxMjoyMSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpJbmdyZWRpZW50cz4gPHJkZjpCYWc+IDxyZGY6bGkgc3RSZWY6bGlua0Zvcm09IlJlZmVyZW5jZVN0cmVhbSIgc3RSZWY6ZmlsZVBhdGg9ImNsb3VkLWFzc2V0Oi8vY2MtYXBpLXN0b3JhZ2UuYWRvYmUuaW8vYXNzZXRzL2Fkb2JlLWxpYnJhcmllcy9kYzJlOWNhMC05MzA4LTRhMzktODNkNS1lN2Y3NDA1MGE2MzY7bm9kZT1jZWIyOTg3Yi03NTgx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"

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/[slug].js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevinschuit/Ontwikkeling/Klanten/InFavor marketing/repository/infavormarketing/pages/[slug].js */"./pages/[slug].js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-parallax":
/*!*********************************!*\
  !*** external "react-parallax" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-parallax");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "wpapi":
/*!************************!*\
  !*** external "wpapi" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wpapi");

/***/ })

/******/ });
//# sourceMappingURL=[slug].js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js



var Meta_Meta = function Meta() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "http://ricostacruz.com/nprogress/nprogress.css"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Oswald",
    rel: "stylesheet"
  }), external_react_default.a.createElement("title", null, "Test Site"));
};

/* harmony default export */ var components_Meta = (Meta_Meta);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(3);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/Header.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    #header-background {\n      height: 70px;\n      position: relative;\n      background-color: #CC0000;\n      margin-bottom: 60px;\n      z-index: -1;\n    }\n    #header-background:before {\n      content: \"\";\n      position: absolute;\n      width: 50%;\n      height: 120px;\n      left: -10%;\n      transform: skew(-45deg);\n      background-color: #CC0000;\n    }\n    #header {\n      height: 60px;\n      position: relative;\n      background-color: #E20210;\n    }\n    #header:before {\n      content: \"\";\n      position: absolute;\n      width: 45%;\n      height: 110px;\n      left: -10%;\n      transform: skew(-45deg);\n      background-color: #E20210;\n    }\n    #header-icon {\n      position: relative;\n      width: 80px;\n      height: 80px;\n      background: #edf4f7;\n      border-radius: 50%;\n      top: 27%;\n      left: 3%;\n      z-index: 1;\n    }\n    #inner-icon {\n      position: absolute;\n      content: '';\n      width: 70px;\n      height: 70px;\n      border-radius: 50%;\n      top: 50%;\n      left: 50%;\n      margin: -35px 0px 0px -35px;\n      background-image: radial-gradient(at 70% 30%, white, ", ");\n    }\n    h1 {\n      margin-top: 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledHeader = external_styled_components_default.a.header(_templateObject(), function (props) {
  return props.theme.mainColor;
});

var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      router_default.a.events.on('routeChangeStart', function () {
        return external_nprogress_default.a.start();
      });
      router_default.a.events.on('routeChangeComplete', function () {
        return external_nprogress_default.a.done();
      });
      router_default.a.events.on('routeChangeError', function () {
        return external_nprogress_default.a.done();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(StyledHeader, null, external_react_default.a.createElement("div", {
        id: "header-background"
      }, external_react_default.a.createElement("div", {
        id: "header"
      }, external_react_default.a.createElement("div", {
        id: "header-icon"
      }, external_react_default.a.createElement("span", {
        id: "inner-icon"
      })))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/Footer.js


function Footer_templateObject() {
  var data = Footer_taggedTemplateLiteral(["\n  background-color: #E20210;\n  padding: 20px;\n  margin-top: 40px;\n  h2{\n    color: white;\n    font-family: 'Oswald', sans-serif;\n    width: 70%\n    margin: 0 auto;\n  }\n  a {\n    color: white;\n  }\n"]);

  Footer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Footer_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledFooter = external_styled_components_default.a.footer(Footer_templateObject());

var Footer_Footer = function Footer() {
  return external_react_default.a.createElement(StyledFooter, null, external_react_default.a.createElement("h2", null, "Pok\xE9mon \xA9 2002-2019 Pok\xE9mon. \xA9 1995-2019 Nintendo/Creatures Inc./GAME FREAK inc. TM, \xAE and Pok\xE9mon character names are trademarks of Nintendo."), external_react_default.a.createElement("h2", null, "Data from ", external_react_default.a.createElement("a", {
    href: "https://pokeapi.co"
  }, "PokeAPI")), external_react_default.a.createElement("h2", null, "Icons made by ", external_react_default.a.createElement("a", {
    href: "https://smashicons.com"
  }, "Smashicons")));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/MyLayout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLayout_Layout; });


function MyLayout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyLayout_typeof = function _typeof(obj) { return typeof obj; }; } else { MyLayout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyLayout_typeof(obj); }

function MyLayout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyLayout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyLayout_createClass(Constructor, protoProps, staticProps) { if (protoProps) MyLayout_defineProperties(Constructor.prototype, protoProps); if (staticProps) MyLayout_defineProperties(Constructor, staticProps); return Constructor; }

function MyLayout_possibleConstructorReturn(self, call) { if (call && (MyLayout_typeof(call) === "object" || typeof call === "function")) { return call; } return MyLayout_assertThisInitialized(self); }

function MyLayout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MyLayout_getPrototypeOf(o) { MyLayout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MyLayout_getPrototypeOf(o); }

function MyLayout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MyLayout_setPrototypeOf(subClass, superClass); }

function MyLayout_setPrototypeOf(o, p) { MyLayout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MyLayout_setPrototypeOf(o, p); }

function _templateObject3() {
  var data = MyLayout_taggedTemplateLiteral(["\n  margin: 0 auto;\n  max-width: 1200px;\n  width: 100%;\n  padding: 0 10px;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = MyLayout_taggedTemplateLiteral(["\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 1fr;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function MyLayout_templateObject() {
  var data = MyLayout_taggedTemplateLiteral(["\n  @font-face {\n    font-family: \"Silkscreen\";\n    src: url(\"/static/fonts/slkscr.ttf\");\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body, h1, h2 {\n    font-size: 1.6rem;\n    padding: 0;\n    margin: 0;\n  }\n  body {\n    background-image: url(\"/static/images/icons/dot-small.png\");\n  }\n"]);

  MyLayout_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function MyLayout_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  mainColor: '#3CF'
};
var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(MyLayout_templateObject());
var StyledPage = external_styled_components_default.a.div(_templateObject2());
var StyledInner = external_styled_components_default.a.div(_templateObject3());

var MyLayout_Layout =
/*#__PURE__*/
function (_React$Component) {
  MyLayout_inherits(Layout, _React$Component);

  function Layout() {
    MyLayout_classCallCheck(this, Layout);

    return MyLayout_possibleConstructorReturn(this, MyLayout_getPrototypeOf(Layout).apply(this, arguments));
  }

  MyLayout_createClass(Layout, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: theme
      }, external_react_default.a.createElement(StyledPage, null, external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement(components_Meta, null), external_react_default.a.createElement(Header_Header, null), external_react_default.a.createElement(StyledInner, null, this.props.children), external_react_default.a.createElement(components_Footer, null)));
    }
  }]);

  return Layout;
}(external_react_default.a.Component);



/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Silkscreen\", sans-serif;\n  background-color: white;\n  .divider {\n    display: flex;\n    flex-wrap: wrap-reverse;\n    justify-content: space-around;\n    text-align: left;\n    padding: 10px;\n    margin: 20px 0;\n    background-color: red;\n    color: white;\n  }\n  .divider > div {\n    margin: 10px 0;\n  }\n  .flex {\n    display: flex;\n    justify-content: space-evenly;\n  }\n  .wrap {\n    flex-wrap: wrap;\n    border: 1px solid black;\n  }\n  .flex div {\n    margin: 0 10px;\n  }\n  .genus {\n    font-style: italic;\n    font-size: 2rem;\n    margin: 10px;\n  }\n  table {\n    display: inline-block;\n    th {\n      padding: 5px;\n      border-bottom: 3px dotted black;\n    }\n  }\n  nav{\n    display: flex;\n    justify-content: space-between;\n    padding: 5px;\n    margin: 20px 0 0 0;\n    background-color: red;\n    color: white;\n    a{\n      color: white;\n      text-decoration: none;\n    }\n  }\n  h1 {\n    padding: 30px;\n    background-color: white;\n    color: black;\n    font-size: 3rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var StyledType = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span(_templateObject2());

var PokedexEntry =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PokedexEntry, _React$Component);

  function PokedexEntry() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PokedexEntry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PokedexEntry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "statDisplay", function (stat) {
      stat = Math.floor(stat / 10);
      var statBar = "";

      for (var i = 0; i < stat; i++) {
        statBar += "|";
      }

      return statBar;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moveDisplay", function (method) {
      if (method == "Level") {
        var moves = _this.props.pokemon.moves.map(function (move) {
          if (move.version_group_details[0].move_learn_method.name == "level-up") {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, move.move.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, move.version_group_details[0].level_learned_at));
          }
        });

        return moves;
      } else {
        var _moves = _this.props.pokemon.moves.map(function (move) {
          if (move.version_group_details[0].move_learn_method.name == method) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, move.move.name));
          }
        });

        return _moves;
      }
    });

    return _this;
  }

  _createClass(PokedexEntry, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pokemon = _this$props.pokemon,
          species = _this$props.species;
      console.log(this.props);

      if (!pokemon.name) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "404 Page not found");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContent, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", null, species.id > 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/pokemon?id=".concat(pokemon.id - 1)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Prev")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Home")), species.id < 718 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/pokemon?id=".concat(pokemon.id + 1)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Next")) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, species.name, " - ", species.names[1].name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: pokemon.sprites.front_default
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "genus"
        }, species.genera[1].language == "en" ? species.genera[1].genus.slice(0, -7) + "pokemon" : species.genera[2].genus.slice(0, -7) + "pokemon"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, species.flavor_text_entries[1].language.name == "en" ? species.flavor_text_entries[1].flavor_text : species.flavor_text_entries[2].flavor_text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "divider"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "flex"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[0].stat.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[1].stat.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[2].stat.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[3].stat.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[4].stat.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[5].stat.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[0].base_stat), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[1].base_stat), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[2].base_stat), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[3].base_stat), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[4].base_stat), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.stats[5].base_stat)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.statDisplay(pokemon.stats[0].base_stat)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.statDisplay(pokemon.stats[1].base_stat)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.statDisplay(pokemon.stats[2].base_stat)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.statDisplay(pokemon.stats[3].base_stat)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.statDisplay(pokemon.stats[4].base_stat)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.statDisplay(pokemon.stats[5].base_stat)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "ID : ", pokemon.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Height : ", pokemon.height / 10, "M"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Weight : ", pokemon.weight / 10, "KG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.abilities.length == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Ability : ", pokemon.abilities[0].ability.name) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Abilities : ", pokemon.abilities[0].ability.name, ", ", pokemon.abilities[1].ability.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, pokemon.types.length == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledType, null, "Type: ", pokemon.types[0].type.name) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledType, null, "Types : ", pokemon.types[0].type.name, ", ", pokemon.types[1].type.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, species.egg_groups.length == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Egg Group : ", species.egg_groups[0].name) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Egg Groups : ", species.egg_groups[0].name, ", ", species.egg_groups[1].name)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Moves"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "flex wrap"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Tutor Moves")), this.moveDisplay("tutor"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          colSpan: "2"
        }, "Level-up Moves")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Move"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Level")), this.moveDisplay("Level"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Egg Moves")), this.moveDisplay("egg"))))));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                data = {};
                _context.prev = 2;
                _context.next = 5;
                return fetch("https://pokeapi.co/api/v2/pokemon/".concat(query.id));

              case 5:
                _context.next = 7;
                return _context.sent.json();

              case 7:
                data.pokemon = _context.sent;
                _context.next = 10;
                return fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(query.id));

              case 10:
                _context.next = 12;
                return _context.sent.json();

              case 12:
                data.species = _context.sent;
                _context.next = 17;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);

              case 17:
                return _context.abrupt("return", data);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 15]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PokedexEntry;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PokedexEntry);

/***/ })
/******/ ]);
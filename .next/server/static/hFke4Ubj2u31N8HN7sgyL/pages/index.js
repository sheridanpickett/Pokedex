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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
  }), external_react_default.a.createElement("title", null, "Pokedex"));
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(9);
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./components/MyLayout.js + 3 modules
var MyLayout = __webpack_require__(7);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Search.js


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: #3CF;\n  width: 220px;\n  box-sizing: border-box;\n  margin: 20px auto;\n  border: 2px solid #3CF;\n  border-radius: 4px;\n  font-size: 16px;\n  font-family: \"Silkscreen\", sans-serif;\n  background-color: white;\n  background-position: 10px 10px;\n  background-image: url('/static/images/icons/searchicon.png');\n  background-repeat: no-repeat;\n  padding: 12px 20px 12px 40px;\n  transition: width 0.4s ease-in-out;\n  ::placeholder {\n    color: #3CF;\n  }\n  :focus, :hover {\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledSearch = external_styled_components_default.a.input(_templateObject());

var Search_Search = function Search(props) {
  return external_react_default.a.createElement(StyledSearch, {
    type: "text",
    name: "Search",
    placeholder: "Search Pokedex",
    onChange: props.searchFilter
  });
};

/* harmony default export */ var components_Search = (Search_Search);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/PokedexDisplay.js


function _templateObject3() {
  var data = PokedexDisplay_taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  font-family: \"Silkscreen\", sans-serif;\n  width: 70px;\n  height: 70px;\n  border: 2px solid grey;\n  background-color: white;\n  div {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    outline-style: hidden;\n  }\n  .focus:focus div, .focus:hover div {\n    animation: ", " .3s steps(2) infinite;\n  }\n  .focus:focus, .focus:hover {\n    outline: 5px solid #5E9ED6;\n  }\n  img {\n    width: 100%;\n  }\n  span img {\n    width: 15%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = PokedexDisplay_taggedTemplateLiteral(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 70px);\n  grid-gap: 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function PokedexDisplay_templateObject() {
  var data = PokedexDisplay_taggedTemplateLiteral(["\n  100% {\n    transform: translateY(10%);\n  }\n\n  0% {\n    transform: translateY(-10%);\n  }\n"]);

  PokedexDisplay_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function PokedexDisplay_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var bounce = Object(external_styled_components_["keyframes"])(PokedexDisplay_templateObject());
var StyledPokedexContainer = external_styled_components_default.a.div(_templateObject2());
var StyledPokedexEntry = external_styled_components_default.a.div(_templateObject3(), bounce);

var PokedexDisplay_PokedexDisplay = function PokedexDisplay(props) {
  var pokemon = [];

  if (props.searchCriteria == "") {
    pokemon = props.pokemon.map(function (pokemon, index) {
      return external_react_default.a.createElement(StyledPokedexEntry, {
        key: index
      }, external_react_default.a.createElement("div", {
        className: "focus",
        tabIndex: "0"
      }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("img", {
        src: "../static/images/icons/pokeball.png"
      }), pokemon.id), external_react_default.a.createElement(link_default.a, {
        href: "/pokemon?id=".concat(pokemon.id)
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/static/images/sprites/".concat(pokemon.id, ".png"),
        alt: pokemon.name
      })))));
    });
  } else {
    pokemon = props.pokemon.filter(function (pokemon) {
      return pokemon.name.includes(props.searchCriteria);
    });
    pokemon = pokemon.map(function (pokemon, index) {
      return external_react_default.a.createElement(StyledPokedexEntry, {
        key: index
      }, external_react_default.a.createElement("div", {
        className: "focus",
        tabIndex: "0"
      }, external_react_default.a.createElement("span", null, external_react_default.a.createElement("img", {
        src: "../static/images/icons/pokeball.png"
      }), pokemon.id), external_react_default.a.createElement(link_default.a, {
        href: "/pokemon?id=".concat(pokemon.id)
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/static/images/sprites/".concat(pokemon.id, ".png"),
        alt: pokemon.name
      })))));
    });
  }

  ;
  return external_react_default.a.createElement(StyledPokedexContainer, null, pokemon);
};

/* harmony default export */ var components_PokedexDisplay = (PokedexDisplay_PokedexDisplay);
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_default; });



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






var pages_default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchFilter", function (e) {
      var searchCriteria = e.target.value.toLowerCase();

      _this.setState({
        searchCriteria: searchCriteria
      });
    });

    _this.state = {
      searchCriteria: ""
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      sessionStorage.setItem('data', JSON.stringify(this.props.pokemon));
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(MyLayout["a" /* default */], null, external_react_default.a.createElement(components_Search, {
        searchFilter: this.searchFilter
      }), external_react_default.a.createElement(components_PokedexDisplay, {
        pokemon: this.props.pokemon.results,
        searchCriteria: this.state.searchCriteria
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var pokemon, ssTest, response, _response;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pokemon = {};

                ssTest = function ssTest() {
                  var test = 'test';

                  try {
                    sessionStorage.setItem(test, test);
                    sessionStorage.removeItem(test);
                    return true;
                  } catch (e) {
                    return false;
                  }
                }; // check if session storage is set


                if (!(ssTest() === true)) {
                  _context.next = 15;
                  break;
                }

                if (!sessionStorage.getItem('data')) {
                  _context.next = 7;
                  break;
                }

                pokemon = JSON.parse(sessionStorage.getItem('data'));
                _context.next = 13;
                break;

              case 7:
                _context.next = 9;
                return external_isomorphic_unfetch_default()("https://pokeapi.co/api/v2/pokemon?limit=718");

              case 9:
                response = _context.sent;
                _context.next = 12;
                return response.json();

              case 12:
                pokemon = _context.sent;

              case 13:
                _context.next = 21;
                break;

              case 15:
                _context.next = 17;
                return external_isomorphic_unfetch_default()("https://pokeapi.co/api/v2/pokemon?limit=718");

              case 17:
                _response = _context.sent;
                _context.next = 20;
                return _response.json();

              case 20:
                pokemon = _context.sent;

              case 21:
                pokemon.results.forEach(function (pokemon, index) {
                  return pokemon.id = index + 1;
                });
                return _context.abrupt("return", {
                  pokemon: pokemon
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(external_react_default.a.Component);



/***/ })
/******/ ]);
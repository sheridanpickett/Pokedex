webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PokedexDisplay.js":
/*!**************************************!*\
  !*** ./components/PokedexDisplay.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/sheridan/Desktop/Pokedex/components/PokedexDisplay.js";


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 70px;\n  height: 70px;\n  display: inline-block;\n  margin: 2px;\n  border: 2px solid grey;\n  background-color: white;\n  &:hover {\n    border: 2px solid #3CF;\n  }\n  img {\n    width: 100%;\n    margin: 0;\n    position: absolute;\n    bottom: 50%;\n    transform: translateY(50%);\n  }\n  div {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n  }\n  div:hover {\n    animation: ", " .3s steps(2) infinite;\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  100% {\n    transform: translateY(0);\n  }\n\n  0% {\n    transform: translateY(-15%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject());
var StyledPokedex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), rotate);

var PokedexDisplay = function PokedexDisplay(props) {
  var pokemon = props.pokemon.results.map(function (pokemon, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPokedex, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/pokemon?name=".concat(pokemon.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/images/sprites/".concat(index + 1, ".png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, pokemon);
};

/* harmony default export */ __webpack_exports__["default"] = (PokedexDisplay);

/***/ })

})
//# sourceMappingURL=index.js.aadef293c6aff3180b52.hot-update.js.map
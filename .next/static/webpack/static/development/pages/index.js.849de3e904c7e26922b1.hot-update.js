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


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  font-family: \"Silkscreen\", sans-serif;\n  width: 70px;\n  height: 70px;\n  border: 2px solid grey;\n  background-color: white;\n  div {\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    outline-style: hidden;\n  }\n  .focus:focus div, .focus:hover div {\n    animation: ", " .3s steps(2) infinite;\n  }\n  .focus:focus, .focus:hover {\n    outline: 5px solid #5E9ED6;\n  }\n  img {\n    width: 100%;\n  }\n  span img {\n    width: 15%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 70px);\n  grid-gap: 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  100% {\n    transform: translateY(10%);\n  }\n\n  0% {\n    transform: translateY(-10%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var bounce = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject());
var StyledPokedexContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var StyledPokedexEntry = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), bounce);

var PokedexDisplay = function PokedexDisplay(props) {
  var pokemon = [];

  if (props.searchCriteria == "") {
    pokemon = props.pokemon.map(function (pokemon, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPokedexEntry, {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "focus",
        tabIndex: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/images/icons/pokeball.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), pokemon.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/pokemon?id=".concat(pokemon.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/sprites/".concat(pokemon.id, ".png"),
        alt: pokemon.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })))));
    });
  } else {
    pokemon = props.pokemon.filter(function (pokemon) {
      return pokemon.name.includes(props.searchCriteria);
    });
    pokemon = pokemon.map(function (pokemon, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPokedexEntry, {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "focus",
        tabIndex: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/images/icons/pokeball.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), pokemon.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/pokemon?id=".concat(pokemon.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/sprites/".concat(pokemon.id, ".png"),
        alt: pokemon.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })))));
    });
  }

  ;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPokedexContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, pokemon);
};

/* harmony default export */ __webpack_exports__["default"] = (PokedexDisplay);

/***/ })

})
//# sourceMappingURL=index.js.849de3e904c7e26922b1.hot-update.js.map
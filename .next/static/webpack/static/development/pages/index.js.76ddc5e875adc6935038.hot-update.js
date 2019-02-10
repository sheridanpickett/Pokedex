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
var _jsxFileName = "/Users/sheridan/Desktop/Pokedex/components/PokedexDisplay.js";



var PokedexDisplay = function PokedexDisplay(props) {
  var pokemon = props.pokemon.results.map(function (pokemon, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      width: "90px",
      src: "/static/images/sprites/".concat(index + 1, ".png"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, pokemon);
};

/* harmony default export */ __webpack_exports__["default"] = (PokedexDisplay);

/***/ })

})
//# sourceMappingURL=index.js.76ddc5e875adc6935038.hot-update.js.map
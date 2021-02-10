webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Container.jsx":
/*!**********************************!*\
  !*** ./components/Container.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var style = {
  width: '100%',
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto'
}; //cloneElement将renderer进行拷贝，然后增加了一些props，以此来扩展想要渲染的renderer节点

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      renderer = _ref.renderer;
  var newElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(renderer, {
    style: style,
    children: children
  });
  return newElement;
}); // export default ({ children, comp: Comp = "div" }) => {
//   return <Comp style={style}>{children}</Comp>
// }

/***/ })

})
//# sourceMappingURL=_app.js.d70ce06bbee9af7a89d1.hot-update.js.map
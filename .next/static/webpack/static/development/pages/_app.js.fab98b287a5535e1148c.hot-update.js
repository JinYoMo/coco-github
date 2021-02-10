webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Container.jsx":
/*!**********************************!*\
  !*** ./components/Container.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var style = {
  width: '100%',
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto'
}; //cloneElement将renderer进行拷贝，然后增加了一些props，以此来扩展想要渲染的renderer节点

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      renderer = _ref.renderer;
  var newElement = Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(renderer, {
    style: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, renderer.props.style, style),
    //避免style重名被覆盖
    children: children
  });
  return newElement;
}); // export default ({ children, comp: Comp = "div" }) => {
//   return <Comp style={style}>{children}</Comp>
// }

/***/ })

})
//# sourceMappingURL=_app.js.fab98b287a5535e1148c.hot-update.js.map
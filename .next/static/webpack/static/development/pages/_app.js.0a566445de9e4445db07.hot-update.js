webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");










var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Footer;
 //style写在外边原因：githubIconStyle 保证对象为同一个 避免重新渲染

var githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20
};
var footerStyle = {
  textAlign: 'center'
};

var Comp = function Comp(_ref) {
  var color = _ref.color,
      children = _ref.children,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({
      color: color
    }, style)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var children = _ref2.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function (event) {
    setSearch(event.target.value);
  }, [setSearch]);
  var handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {}, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "header-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "header-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "github",
    style: githubIconStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-661279908"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 40,
    icon: "user"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    renderer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Comp, {
      color: "red"
    })
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Footer, {
    style: footerStyle
  }, "develop by JinYoMo@", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://github.com/JinYoMo/coco-github",
    className: "jsx-661279908"
  }, "coco-github")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "340508774"
  }, ".content.jsx-661279908{color:red;}.header-inner.jsx-661279908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-661279908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURrQixBQUdvQixBQUdJLEFBSUEsVUFOZixnRUFHZ0MsQUFJSCx5R0FDNUIsVUFKQSIsImZpbGUiOiJFOlxc5Liq5Lq66aG555uuXFxnaXRIdWLpobnnm65cXGNvY28tZ2l0aHViXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5cclxuLy9zdHlsZeWGmeWcqOWklui+ueWOn+WboO+8mmdpdGh1Ykljb25TdHlsZSDkv53or4Hlr7nosaHkuLrlkIzkuIDkuKog6YG/5YWN6YeN5paw5riy5p+TXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBmb250U2l6ZTogNDAsXHJcbiAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICBwYWRkaW5nVG9wOiAxMCxcclxuICBtYXJnaW5SaWdodDogMjAsXHJcbn1cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59XHJcblxyXG5jb25zdCBDb21wID0gKHsgY29sb3IsIGNoaWxkcmVuLCBzdHlsZSB9KSA9PiA8ZGl2IHN0eWxlPXt7IGNvbG9yLCAuLi5zdHlsZSB9fT57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfSwgW3NldFNlYXJjaF0pXHJcbiAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7IH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17Z2l0aHViSWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwi5pCc57Si5LuT5bqTXCIgdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX0gb25TZWFyY2g9e2hhbmRsZU9uU2VhcmNofSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgPENvbnRhaW5lciByZW5kZXJlcj17PENvbXAgY29sb3I9XCJyZWRcIiAvPn0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQ29udGVudD5cclxuICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgIGRldmVsb3AgYnkgSmluWW9Nb0A8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0ppbllvTW8vY29jby1naXRodWJcIj5jb2NvLWdpdGh1YjwvYT5cclxuICAgICAgPC9Gb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIC5oZWFkZXItaW5uZXJ7XHJcbiAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuaGVhZGVyLWxlZnR7XHJcbiAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAjX19uZXh0e1xyXG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbnQtbGF5b3V0e1xyXG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\Layout.jsx */"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "3798261515"
  }, "#__next{height:100%;}.ant-layout{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0V5QixBQUdzQixBQUdBLFlBRmIsQUFHQSIsImZpbGUiOiJFOlxc5Liq5Lq66aG555uuXFxnaXRIdWLpobnnm65cXGNvY28tZ2l0aHViXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5cclxuLy9zdHlsZeWGmeWcqOWklui+ueWOn+WboO+8mmdpdGh1Ykljb25TdHlsZSDkv53or4Hlr7nosaHkuLrlkIzkuIDkuKog6YG/5YWN6YeN5paw5riy5p+TXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBmb250U2l6ZTogNDAsXHJcbiAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICBwYWRkaW5nVG9wOiAxMCxcclxuICBtYXJnaW5SaWdodDogMjAsXHJcbn1cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59XHJcblxyXG5jb25zdCBDb21wID0gKHsgY29sb3IsIGNoaWxkcmVuLCBzdHlsZSB9KSA9PiA8ZGl2IHN0eWxlPXt7IGNvbG9yLCAuLi5zdHlsZSB9fT57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfSwgW3NldFNlYXJjaF0pXHJcbiAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7IH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17Z2l0aHViSWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwi5pCc57Si5LuT5bqTXCIgdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX0gb25TZWFyY2g9e2hhbmRsZU9uU2VhcmNofSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgPENvbnRhaW5lciByZW5kZXJlcj17PENvbXAgY29sb3I9XCJyZWRcIiAvPn0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQ29udGVudD5cclxuICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgIGRldmVsb3AgYnkgSmluWW9Nb0A8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0ppbllvTW8vY29jby1naXRodWJcIj5jb2NvLWdpdGh1YjwvYT5cclxuICAgICAgPC9Gb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIC5oZWFkZXItaW5uZXJ7XHJcbiAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuaGVhZGVyLWxlZnR7XHJcbiAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAjX19uZXh0e1xyXG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbnQtbGF5b3V0e1xyXG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\Layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.0a566445de9e4445db07.hot-update.js.map
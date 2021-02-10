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
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");









var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_4___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_4___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_4___default.a.Footer;
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
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      color: color
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var children = _ref2.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event) {
    setSearch(event.target.value);
  }, [setSearch]);
  var handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {}, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "header-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "header-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "github",
    style: githubIconStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-661279908"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-661279908" + " " + "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 40,
    icon: "user"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    renderer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Comp, {
      color: "red"
    })
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Footer, {
    style: footerStyle
  }, "develop by JinYoMo@", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "https://github.com/JinYoMo/coco-github",
    className: "jsx-661279908"
  }, "coco-github")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "340508774"
  }, ".content.jsx-661279908{color:red;}.header-inner.jsx-661279908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-661279908{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURrQixBQUdvQixBQUdJLEFBSUEsVUFOZixnRUFHZ0MsQUFJSCx5R0FDNUIsVUFKQSIsImZpbGUiOiJFOlxc5Liq5Lq66aG555uuXFxnaXRIdWLpobnnm65cXGNvY28tZ2l0aHViXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5cclxuLy9zdHlsZeWGmeWcqOWklui+ueWOn+WboO+8mmdpdGh1Ykljb25TdHlsZSDkv53or4Hlr7nosaHkuLrlkIzkuIDkuKog6YG/5YWN6YeN5paw5riy5p+TXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBmb250U2l6ZTogNDAsXHJcbiAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICBwYWRkaW5nVG9wOiAxMCxcclxuICBtYXJnaW5SaWdodDogMjAsXHJcbn1cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59XHJcblxyXG5jb25zdCBDb21wID0gKHsgY29sb3IsIGNoaWxkcmVuIH0pID0+IDxkaXYgc3R5bGU9e3sgY29sb3IgfX0+e2NoaWxkcmVufTwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH0sIFtzZXRTZWFyY2hdKVxyXG4gIGNvbnN0IGhhbmRsZU9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4geyB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIuaQnOe0ouS7k+W6k1wiIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9IG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIDxDb250YWluZXIgcmVuZGVyZXI9ezxDb21wIGNvbG9yPVwicmVkXCIgLz59PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXIgc3R5bGU9e2Zvb3RlclN0eWxlfT5cclxuICAgICAgICBkZXZlbG9wIGJ5IEppbllvTW9APGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KaW5Zb01vL2NvY28tZ2l0aHViXCI+Y29jby1naXRodWI8L2E+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAuaGVhZGVyLWlubmVye1xyXG4gICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmhlYWRlci1sZWZ0e1xyXG4gICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgI19fbmV4dHtcclxuICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWxheW91dHtcclxuICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\Layout.jsx */"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "3798261515"
  }, "#__next{height:100%;}.ant-layout{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0V5QixBQUdzQixBQUdBLFlBRmIsQUFHQSIsImZpbGUiOiJFOlxc5Liq5Lq66aG555uuXFxnaXRIdWLpobnnm65cXGNvY28tZ2l0aHViXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5cclxuLy9zdHlsZeWGmeWcqOWklui+ueWOn+WboO+8mmdpdGh1Ykljb25TdHlsZSDkv53or4Hlr7nosaHkuLrlkIzkuIDkuKog6YG/5YWN6YeN5paw5riy5p+TXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBmb250U2l6ZTogNDAsXHJcbiAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICBwYWRkaW5nVG9wOiAxMCxcclxuICBtYXJnaW5SaWdodDogMjAsXHJcbn1cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59XHJcblxyXG5jb25zdCBDb21wID0gKHsgY29sb3IsIGNoaWxkcmVuIH0pID0+IDxkaXYgc3R5bGU9e3sgY29sb3IgfX0+e2NoaWxkcmVufTwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH0sIFtzZXRTZWFyY2hdKVxyXG4gIGNvbnN0IGhhbmRsZU9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4geyB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIuaQnOe0ouS7k+W6k1wiIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9IG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIDxDb250YWluZXIgcmVuZGVyZXI9ezxDb21wIGNvbG9yPVwicmVkXCIgLz59PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXIgc3R5bGU9e2Zvb3RlclN0eWxlfT5cclxuICAgICAgICBkZXZlbG9wIGJ5IEppbllvTW9APGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KaW5Zb01vL2NvY28tZ2l0aHViXCI+Y29jby1naXRodWI8L2E+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAuaGVhZGVyLWlubmVye1xyXG4gICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmhlYWRlci1sZWZ0e1xyXG4gICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgI19fbmV4dHtcclxuICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWxheW91dHtcclxuICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\Layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.030a6b6c3d55270b239e.hot-update.js.map
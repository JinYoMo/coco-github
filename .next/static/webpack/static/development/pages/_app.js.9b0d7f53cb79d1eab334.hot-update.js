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
}; // const Comp = ({ color, children, style }) => <div style={{ color, ...style }}>{children}</div>

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event) {
    setSearch(event.target.value);
  }, [setSearch]);
  var handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {}, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    renderer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-2679198850" + " " + "header-inner"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2679198850" + " " + "header-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2679198850" + " " + "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "github",
    style: githubIconStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2679198850"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2679198850" + " " + "header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2679198850" + " " + "user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 40,
    icon: "user"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], null, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Footer, {
    style: footerStyle
  }, "develop by JinYoMo@", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "https://github.com/JinYoMo/coco-github",
    className: "jsx-2679198850"
  }, "coco-github")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "340508774"
  }, ".content.jsx-2679198850{color:red;}.header-inner.jsx-2679198850{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-2679198850{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUdvQixBQUdJLEFBSUEsVUFOZixnRUFHZ0MsQUFJSCx5R0FDNUIsVUFKQSIsImZpbGUiOiJFOlxc5Liq5Lq66aG555uuXFxnaXRIdWLpobnnm65cXGNvY28tZ2l0aHViXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5cclxuLy9zdHlsZeWGmeWcqOWklui+ueWOn+WboO+8mmdpdGh1Ykljb25TdHlsZSDkv53or4Hlr7nosaHkuLrlkIzkuIDkuKog6YG/5YWN6YeN5paw5riy5p+TXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBmb250U2l6ZTogNDAsXHJcbiAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICBwYWRkaW5nVG9wOiAxMCxcclxuICBtYXJnaW5SaWdodDogMjAsXHJcbn1cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59XHJcblxyXG4vLyBjb25zdCBDb21wID0gKHsgY29sb3IsIGNoaWxkcmVuLCBzdHlsZSB9KSA9PiA8ZGl2IHN0eWxlPXt7IGNvbG9yLCAuLi5zdHlsZSB9fT57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgIHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfSwgW3NldFNlYXJjaF0pXHJcbiAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7IH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxDb250YWluZXIgcmVuZGVyZXI9ezxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCIgLz59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIuaQnOe0ouS7k+W6k1wiIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9IG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXIgc3R5bGU9e2Zvb3RlclN0eWxlfT5cclxuICAgICAgICBkZXZlbG9wIGJ5IEppbllvTW9APGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KaW5Zb01vL2NvY28tZ2l0aHViXCI+Y29jby1naXRodWI8L2E+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAuaGVhZGVyLWlubmVye1xyXG4gICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmhlYWRlci1sZWZ0e1xyXG4gICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgI19fbmV4dHtcclxuICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWxheW91dHtcclxuICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWxheW91dC1oZWFkZXJ7XHJcbiAgICAgICAgICBwYWRkaW5nTGVmdDowO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\Layout.jsx */"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "29126125"
  }, "#__next{height:100%;}.ant-layout{height:100%;}.ant-layout-header{paddingLeft:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0V5QixBQUdzQixBQUdBLEFBR0UsWUFMZixBQUdBLEVBR0EiLCJmaWxlIjoiRTpcXOS4quS6uumhueebrlxcZ2l0SHVi6aG555uuXFxjb2NvLWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTGF5b3V0LCBJY29uLCBJbnB1dCwgQXZhdGFyIH0gZnJvbSAnYW50ZCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcclxuXHJcbi8vc3R5bGXlhpnlnKjlpJbovrnljp/lm6DvvJpnaXRodWJJY29uU3R5bGUg5L+d6K+B5a+56LGh5Li65ZCM5LiA5LiqIOmBv+WFjemHjeaWsOa4suafk1xyXG5jb25zdCBnaXRodWJJY29uU3R5bGUgPSB7XHJcbiAgY29sb3I6ICd3aGl0ZScsXHJcbiAgZm9udFNpemU6IDQwLFxyXG4gIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgcGFkZGluZ1RvcDogMTAsXHJcbiAgbWFyZ2luUmlnaHQ6IDIwLFxyXG59XHJcbmNvbnN0IGZvb3RlclN0eWxlID0ge1xyXG4gIHRleHRBbGlnbjogJ2NlbnRlcidcclxufVxyXG5cclxuLy8gY29uc3QgQ29tcCA9ICh7IGNvbG9yLCBjaGlsZHJlbiwgc3R5bGUgfSkgPT4gPGRpdiBzdHlsZT17eyBjb2xvciwgLi4uc3R5bGUgfX0+e2NoaWxkcmVufTwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH0sIFtzZXRTZWFyY2hdKVxyXG4gIGNvbnN0IGhhbmRsZU9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4geyB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8Q29udGFpbmVyIHJlbmRlcmVyPXs8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiIC8+fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cImdpdGh1YlwiIHN0eWxlPXtnaXRodWJJY29uU3R5bGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCLmkJzntKLku5PlupNcIiB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfSBvblNlYXJjaD17aGFuZGxlT25TZWFyY2h9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Q29udGVudD5cclxuICAgICAgICA8Q29udGFpbmVyPntjaGlsZHJlbn08L0NvbnRhaW5lcj5cclxuICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8Rm9vdGVyIHN0eWxlPXtmb290ZXJTdHlsZX0+XHJcbiAgICAgICAgZGV2ZWxvcCBieSBKaW5Zb01vQDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSmluWW9Nby9jb2NvLWdpdGh1YlwiPmNvY28tZ2l0aHViPC9hPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgLmhlYWRlci1pbm5lcntcclxuICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5oZWFkZXItbGVmdHtcclxuICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICNfX25leHR7XHJcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFudC1sYXlvdXR7XHJcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFudC1sYXlvdXQtaGVhZGVye1xyXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6MDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\Layout.jsx */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.9b0d7f53cb79d1eab334.hot-update.js.map
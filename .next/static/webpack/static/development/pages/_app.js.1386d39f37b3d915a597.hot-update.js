webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");

















var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Footer;


var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_10___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; //style写在外边原因：githubIconStyle 保证对象为同一个 避免重新渲染


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

function MyLayout(_ref) {
  var children = _ref.children,
      user = _ref.user,
      logout = _ref.logout,
      router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (event) {
    setSearch(event.target.value);
  }, [setSearch]);
  var handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function () {
    router.push("/search?query=".concat(search));
  }, [search]);
  var handleLogout = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function () {
    logout();
  }, [logout]);
  var handleGoToOAuth = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (e) {
    e.preventDefault(); //取消默认跳转

    axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("prepare-auth?url=".concat(router.asPath)).then(function (resp) {
      if (resp.status === 200) {
        location.href = publicRuntimeConfig.OAUTH_URL;
      } else {
        console.log('prepare auth failed', resp);
      }
    }).catch(function (err) {
      console.log('prepare auth failed', err);
    });
  }, []); //[]表示不依赖任何state和props的内容

  var userDropDown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
    onClick: handleLogout
  }, "\u767B\u51FA")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
    renderer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "jsx-2614626269" + " " + "header-inner"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-2614626269" + " " + "header-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-2614626269" + " " + "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "github",
    style: githubIconStyle
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-2614626269"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-2614626269" + " " + "header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-2614626269" + " " + "user"
  }, user && user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlay: userDropDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
    href: "/",
    className: "jsx-2614626269"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    src: user.avatar_url
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "\u70B9\u51FB\u8FDB\u884C\u767B\u5F55"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
    href: "prepare-auth?url=".concat(router.asPath),
    className: "jsx-2614626269"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    icon: "user"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_16__["default"], null, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Footer, {
    style: footerStyle
  }, "develop by JinYoMo@", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
    href: "https://github.com/JinYoMo/coco-github",
    className: "jsx-2614626269"
  }, "coco-github")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "1225665645"
  }, ".header-inner.jsx-2614626269{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-2614626269{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdrQixBQUd3QixBQUlBLDBFQUhpQixBQUlILHlHQUM1QixVQUpBIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTGF5b3V0LCBJY29uLCBJbnB1dCwgQXZhdGFyLCBUb29sdGlwLCBEcm9wZG93biwgTWVudSB9IGZyb20gJ2FudGQnXHJcblxyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcclxuXHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKClcclxuXHJcbi8vc3R5bGXlhpnlnKjlpJbovrnljp/lm6DvvJpnaXRodWJJY29uU3R5bGUg5L+d6K+B5a+56LGh5Li65ZCM5LiA5LiqIOmBv+WFjemHjeaWsOa4suafk1xyXG5jb25zdCBnaXRodWJJY29uU3R5bGUgPSB7XHJcbiAgY29sb3I6ICd3aGl0ZScsXHJcbiAgZm9udFNpemU6IDQwLFxyXG4gIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgcGFkZGluZ1RvcDogMTAsXHJcbiAgbWFyZ2luUmlnaHQ6IDIwLFxyXG59XHJcbmNvbnN0IGZvb3RlclN0eWxlID0ge1xyXG4gIHRleHRBbGlnbjogJ2NlbnRlcidcclxufVxyXG5cclxuLy8gY29uc3QgQ29tcCA9ICh7IGNvbG9yLCBjaGlsZHJlbiwgc3R5bGUgfSkgPT4gPGRpdiBzdHlsZT17eyBjb2xvciwgLi4uc3R5bGUgfX0+e2NoaWxkcmVufTwvZGl2PlxyXG5cclxuZnVuY3Rpb24gTXlMYXlvdXQgKHsgY2hpbGRyZW4sIHVzZXIsIGxvZ291dCwgcm91dGVyIH0pIHtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9LCBbc2V0U2VhcmNoXSlcclxuICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoP3F1ZXJ5PSR7c2VhcmNofWApXHJcbiAgfSwgW3NlYXJjaF0pXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4geyBsb2dvdXQoKSB9LCBbbG9nb3V0XSlcclxuICBjb25zdCBoYW5kbGVHb1RvT0F1dGggPSB1c2VDYWxsYmFjayhlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgIC8v5Y+W5raI6buY6K6k6Lez6L2sXHJcbiAgICBheGlvcy5nZXQoYHByZXBhcmUtYXV0aD91cmw9JHtyb3V0ZXIuYXNQYXRofWApXHJcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gcHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3ByZXBhcmUgYXV0aCBmYWlsZWQnLCByZXNwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXBhcmUgYXV0aCBmYWlsZWQnLCBlcnIpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pICAvL1td6KGo56S65LiN5L6d6LWW5Lu75L2Vc3RhdGXlkoxwcm9wc+eahOWGheWuuVxyXG4gIGNvbnN0IHVzZXJEcm9wRG93biA9IChcclxuICAgIDxNZW51PlxyXG4gICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+55m75Ye6PC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPENvbnRhaW5lciByZW5kZXJlcj17PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIiAvPn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9XCLmkJzntKLku5PlupNcIiB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfSBvblNlYXJjaD17aGFuZGxlT25TZWFyY2h9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyICYmIHVzZXIuaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXt1c2VyRHJvcERvd259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8nID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IHNyYz17dXNlci5hdmF0YXJfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLngrnlh7vov5vooYznmbvlvZVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiDot7PovaxnaXRodWIgT0F1dG7ov57mjqUg5L2/55SocHJlcGFyZS1hdXRo6K+l5o6l5Y+j5piv5L+d6K+B5Zyo5LiN5ZCM6aG16Z2i55m75b2V5Z2H57u05oyB6K+l6aG16Z2i54q25oCBIOebuOW9k+S6jkdFVOivt+axgiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YHByZXBhcmUtYXV0aD91cmw9JHtyb3V0ZXIuYXNQYXRofWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXIgc3R5bGU9e2Zvb3RlclN0eWxlfT5cclxuICAgICAgICBkZXZlbG9wIGJ5IEppbllvTW9APGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KaW5Zb01vL2NvY28tZ2l0aHViXCI+Y29jby1naXRodWI8L2E+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgIC5oZWFkZXItaW5uZXJ7XHJcbiAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuaGVhZGVyLWxlZnR7XHJcbiAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAjX19uZXh0e1xyXG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbnQtbGF5b3V0e1xyXG4gICAgICAgICAgbWluLWhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWxheW91dC1oZWFkZXJ7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFudC1sYXlvdXQtY29udGVudHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuLy9leHBvcnQgZGVmYXVsdCDlv4XpobvmmK/kuIDkuKrlh73mlbAgY29ubmVjdOi/lOWbnueahOWwseaYr+WHveaVsFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlIChzdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyOiBzdGF0ZS51c2VyXHJcbiAgfVxyXG59LCBmdW5jdGlvbiBtYXBSZWR1Y2VyIChkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gIH1cclxufSkod2l0aFJvdXRlcihNeUxheW91dCkpIl19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\Layout.jsx */"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "3824429241"
  }, "#__next{height:100%;}.ant-layout{min-height:100%;}.ant-layout-header{padding-left:0;padding-right:0;}.ant-layout-content{background:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUh5QixBQUdzQixBQUdJLEFBR0QsQUFJQyxZQVRqQixHQU1pQixDQUhqQixBQU9BLGVBSEEiLCJmaWxlIjoiRTpcXOS4quS6uumhueebrlxcZ2l0SHVi6aG555uuXFxjb2NvLWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBMYXlvdXQsIEljb24sIElucHV0LCBBdmF0YXIsIFRvb2x0aXAsIERyb3Bkb3duLCBNZW51IH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxuLy9zdHlsZeWGmeWcqOWklui+ueWOn+WboO+8mmdpdGh1Ykljb25TdHlsZSDkv53or4Hlr7nosaHkuLrlkIzkuIDkuKog6YG/5YWN6YeN5paw5riy5p+TXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBmb250U2l6ZTogNDAsXHJcbiAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICBwYWRkaW5nVG9wOiAxMCxcclxuICBtYXJnaW5SaWdodDogMjAsXHJcbn1cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG59XHJcblxyXG4vLyBjb25zdCBDb21wID0gKHsgY29sb3IsIGNoaWxkcmVuLCBzdHlsZSB9KSA9PiA8ZGl2IHN0eWxlPXt7IGNvbG9yLCAuLi5zdHlsZSB9fT57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG5mdW5jdGlvbiBNeUxheW91dCAoeyBjaGlsZHJlbiwgdXNlciwgbG9nb3V0LCByb3V0ZXIgfSkge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH0sIFtzZXRTZWFyY2hdKVxyXG4gIGNvbnN0IGhhbmRsZU9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2g/cXVlcnk9JHtzZWFyY2h9YClcclxuICB9LCBbc2VhcmNoXSlcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IGxvZ291dCgpIH0sIFtsb2dvdXRdKVxyXG4gIGNvbnN0IGhhbmRsZUdvVG9PQXV0aCA9IHVzZUNhbGxiYWNrKGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgLy/lj5bmtojpu5jorqTot7PovaxcclxuICAgIGF4aW9zLmdldChgcHJlcGFyZS1hdXRoP3VybD0ke3JvdXRlci5hc1BhdGh9YClcclxuICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncHJlcGFyZSBhdXRoIGZhaWxlZCcsIHJlc3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJlcGFyZSBhdXRoIGZhaWxlZCcsIGVycilcclxuICAgICAgfSlcclxuICB9LCBbXSkgIC8vW13ooajnpLrkuI3kvp3otZbku7vkvZVzdGF0ZeWSjHByb3Bz55qE5YaF5a65XHJcbiAgY29uc3QgdXNlckRyb3BEb3duID0gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgPGEgb25DbGljaz17aGFuZGxlTG9nb3V0fT7nmbvlh7o8L2E+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gIClcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8Q29udGFpbmVyIHJlbmRlcmVyPXs8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiIC8+fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17Z2l0aHViSWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBwbGFjZWhvbGRlcj1cIuaQnOe0ouS7k+W6k1wiIHZhbHVlPXtzZWFyY2h9IG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9IG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXIgJiYgdXNlci5pZCA/IChcclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e3VzZXJEcm9wRG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gc3JjPXt1c2VyLmF2YXRhcl91cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIueCueWHu+i/m+ihjOeZu+W9lVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIOi3s+i9rGdpdGh1YiBPQXV0bui/nuaOpSDkvb/nlKhwcmVwYXJlLWF1dGjor6XmjqXlj6PmmK/kv53or4HlnKjkuI3lkIzpobXpnaLnmbvlvZXlnYfnu7TmjIHor6XpobXpnaLnirbmgIEg55u45b2T5LqOR0VU6K+35rGCKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgcHJlcGFyZS1hdXRoP3VybD0ke3JvdXRlci5hc1BhdGh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgPENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICAgIDwvQ29udGVudD5cclxuICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgIGRldmVsb3AgYnkgSmluWW9Nb0A8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0ppbllvTW8vY29jby1naXRodWJcIj5jb2NvLWdpdGh1YjwvYT5cclxuICAgICAgPC9Gb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgLmhlYWRlci1pbm5lcntcclxuICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5oZWFkZXItbGVmdHtcclxuICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICNfX25leHR7XHJcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFudC1sYXlvdXR7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbnQtbGF5b3V0LWhlYWRlcntcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDowO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWxheW91dC1jb250ZW50e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG4vL2V4cG9ydCBkZWZhdWx0IOW/hemhu+aYr+S4gOS4quWHveaVsCBjb25uZWN06L+U5Zue55qE5bCx5piv5Ye95pWwXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZnVuY3Rpb24gbWFwU3RhdGUgKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXI6IHN0YXRlLnVzZXJcclxuICB9XHJcbn0sIGZ1bmN0aW9uIG1hcFJlZHVjZXIgKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxvZ291dDogKCkgPT4gZGlzcGF0Y2gobG9nb3V0KCkpXHJcbiAgfVxyXG59KSh3aXRoUm91dGVyKE15TGF5b3V0KSkiXX0= */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\Layout.jsx */"));
} //export default 必须是一个函数 connect返回的就是函数


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function mapState(state) {
  return {
    user: state.user
  };
}, function mapReducer(dispatch) {
  return {
    logout: function logout() {
      return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["logout"])());
    }
  };
})(Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(MyLayout)));

/***/ })

})
//# sourceMappingURL=_app.js.1386d39f37b3d915a597.hot-update.js.map
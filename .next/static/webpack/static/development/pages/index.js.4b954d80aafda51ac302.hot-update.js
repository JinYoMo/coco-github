webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");














var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_7___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var isServer = typeof window === 'undefined'; //注意缓存在客户端和服务端公用的情况，引入isServer判断 并且设置了时效

var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_10___default.a({
  maxAge: 1000 * 60 * 10 //最长10min不去使用缓存数据就清空

});

function Index(_ref) {
  var userRepos = _ref.userRepos,
      userStaredRepos = _ref.userStaredRepos,
      user = _ref.user,
      router = _ref.router;
  console.log(userRepos, userStaredRepos, user, router);
  var tabKey = router.query.key || '1';

  var handleTabChange = function handleTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/?key=".concat(activeKey));
  }; //第一次进来发现有数据就会被缓存


  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isServer) {
      //不是服务端的情况下，对数据进行缓存，方便再次进入不需要调接口
      cache.set('userRepos', userRepos);
      cache.set('userStaredRepos', userStaredRepos);
    }
  }, [userRepos, userStaredRepos]); //监听参数发生变化则会调用

  if (!user || !user.id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3888340167" + " " + "root"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      className: "jsx-3888340167"
    }, "\u4EB2\uFF0C\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\u54E6~"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "primary",
      href: publicRuntimeConfig.OAUTH_URL
    }, "\u70B9\u51FB\u767B\u5F55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "3888340167"
    }, ".root.jsx-3888340167{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ21CLEFBR3VCLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3BCIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sSWNvbixUYWJzfSBmcm9tICdhbnRkJyBcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlcix7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJ1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgYXBpPXJlcXVpcmUoJy4uL2xpYi9hcGknKVxyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxuY29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdyA9PT0ndW5kZWZpbmVkJ1xyXG5cclxuLy/ms6jmhI/nvJPlrZjlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/lhaznlKjnmoTmg4XlhrXvvIzlvJXlhaVpc1NlcnZlcuWIpOaWrSDlubbkuJTorr7nva7kuobml7bmlYhcclxuY29uc3QgY2FjaGU9bmV3IExSVSh7XHJcbiAgbWF4QWdlOjEwMDAqNjAqMTAgIC8v5pyA6ZW/MTBtaW7kuI3ljrvkvb/nlKjnvJPlrZjmlbDmja7lsLHmuIXnqbpcclxufSlcclxuIGZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlclN0YXJlZFJlcG9zLHVzZXIscm91dGVyfSl7XHJcbiAgY29uc29sZS5sb2codXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvcyx1c2VyLHJvdXRlcilcclxuICBjb25zdCB0YWJLZXk9cm91dGVyLnF1ZXJ5LmtleSB8fCAnMSc7XHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlPSBhY3RpdmVLZXkgPT57XHJcbiAgICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgfVxyXG4gIC8v56ys5LiA5qyh6L+b5p2l5Y+R546w5pyJ5pWw5o2u5bCx5Lya6KKr57yT5a2YXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZighaXNTZXJ2ZXIpe1xyXG4gICAgICAvL+S4jeaYr+acjeWKoeerr+eahOaDheWGteS4i++8jOWvueaVsOaNrui/m+ihjOe8k+WtmO+8jOaWueS+v+WGjeasoei/m+WFpeS4jemcgOimgeiwg+aOpeWPo1xyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJSZXBvcycsdXNlclJlcG9zKVxyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFyZWRSZXBvcycsdXNlclN0YXJlZFJlcG9zKVxyXG4gICAgfVxyXG4gIH0sW3VzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3NdKSAgLy/nm5HlkKzlj4LmlbDlj5HnlJ/lj5jljJbliJnkvJrosIPnlKhcclxuICAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT7ngrnlh7vnmbvlvZU8L0J1dHRvbj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdHtcclxuICAgICAgICAgIGhlaWdodDo0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgYH08L3N0eWxlPlxyXG4gICAgIDwvZGl2PlxyXG4gICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwidXNlciBhdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3ttYXJnaW5SaWdodDoxMH19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYWNrXCI+e3VzZXIuaHRtbF91cmx9PC9hPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAocmVwbz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAocmVwbz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAucm9vdHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOjA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW57XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ODAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjojNzc3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iaW97XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItcmVwb3N7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OjE7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gfVxyXG4gLy/mnI3liqHnq6/lkozlrqLmiLfnq6/pg73kvJrmiafooYxcclxuIC8qKlxyXG4gICog5a6i5oi356uv5YiH5o2i5LiO6K6/6ZeuSW5kZXjpobXpnaLmnI3liqHnq6/muLLmn5Ppg73kvJrmiafooYxnZXRJbml0aWFsUHJvcHNcclxuICAqIOWcqOacjeWKoeerr+a4suafk+eahOaXtuWAme+8jOi/kOihjOeOr+Wig+aYr+WkhOS6jm5vZGVqc+eOr+Wig++8jOiAjOS4jeaYr+WkhOS6jua1j+iniOWZqOeahOeOr+Wig1xyXG4gICog5Zyobm9kZWpz546v5aKD5LitYXhpb3MuZ2V0KCcvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcp5pa55byP6K+35rGC77yM5Lya6K+35rGCJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCflnLDlnYDvvIzov5nkuKrlnLDlnYDmmI7mmL7or7fmsYLkuI3miJDlip9cclxuICAqIOino+WGs+eahOaWueW8j+aYr+ivt+axgmFwaeaXtuWIpOaWreaYr+WQpuS4uuacjeWKoeerr++8jOaPkOWPluWHuuWFrOWFseeahGxpYi9hcGkuanNcclxuICAqIOWuouaIt+err+eahOivt+axguS8muWIsHNlcnZlci9hcGkuanPkuK3lgZrlpITnkIbvvIzov5Tlm57nu5nlrqLmiLfnq69cclxuICAqIOS7peS4iuWwseaYr+WQjOaehOeahOamguW/teKAlOKAlOWwseaYr+aciemDqOWIhuS7o+eggemDveWPr+iDveS8muWcqOWuouaIt+err+WSjOacjeWKoeerr+aJp+ihjO+8jOWboOatpOi/meauteS7o+eggeWwseimgemAguW6lOa1j+iniOWZqOeahOaJp+ihjOeOr+Wig++8jOS5n+imgemAguW6lG5vZGVqc+eahOaJp+ihjOeOr+Wig++8jOWboOatpOWBmuWMuuWIhuWkhOeQhu+8jOacgOe7iOaxh+mbhuWIsOS4gOS4queCuXJlcXVlc3RHaXRodWLkuIrpnaLvvIzkv53or4HlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/pg73lj6/mraPluLjmiafooYxcclxuICAqL1xyXG4gSW5kZXguZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4LHJlZHV4U3RvcmV9KT0+e1xyXG4gIC8vICBjb25zdCByZXN1bHQ9YXdhaXQgYXhpb3NcclxuICAvLyAgLmdldCgnL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnKVxyXG4gIC8vICAudGhlbihyZXNwPT5jb25zb2xlLmxvZyhyZXNwKSlcclxuICBjb25zdCB1c2VyPXJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyOyAvL+aLv+WIsOeUqOaIt+S/oeaBr1xyXG4gIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOmZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKCFpc1NlcnZlcil7XHJcbiAgICAvL+S4jeaYr+acjeWKoeerr+eahOaDheWGteS4i++8jOWvueaVsOaNrui/m+ihjOe8k+WtmO+8jOWGjeasoei/m+WFpeS4jemcgOimgeiwg+aOpeWPo++8jOebtOaOpei/lOWbnlxyXG4gICAgaWYoY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSYmY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOmNhY2hlLmdldCgndXNlclJlcG9zJyksXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvL2N0eC5yZXEsY3R4LnJlc+WPquacieWcqOacjeWKoeerr+a4suafk+aXtuaJjeS8muaciVxyXG4gIC8v6LCD55So5b2T5YmN55So5oi355qE5LuT5bqT5YiX6KGoXHJcbiAgY29uc3QgdXNlclJlcG9zPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvcmVwb3MnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzLFxyXG4gIClcclxuICAvL+iwg+eUqOWFs+azqOeahOS7k+W6k+WIl+ihqFxyXG4gIGNvbnN0IHVzZXJTdGFyZWRSZXBvcz0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzLFxyXG4gIClcclxuICAgcmV0dXJuIHtcclxuICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgdXNlclJlcG9zOnVzZXJSZXBvcy5kYXRhLFxyXG4gICAgIHVzZXJTdGFyZWRSZXBvczp1c2VyU3RhcmVkUmVwb3MuZGF0YVxyXG4gICB9XHJcbiB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFxyXG4gIGNvbm5lY3QoZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICB9XHJcbiAgfSkoSW5kZXgpLFxyXG4pIl19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\index.js */"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2096139808" + " " + "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2096139808" + " " + "user-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
    src: user.avatar_url,
    alt: "user avatar",
    className: "jsx-2096139808" + " " + "avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2096139808" + " " + "login"
  }, user.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2096139808" + " " + "name"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2096139808" + " " + "bio"
  }, user.bio), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2096139808" + " " + "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "mail",
    style: {
      marginRight: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: user.html_url,
    target: "_black",
    className: "jsx-2096139808"
  }, user.html_url))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2096139808" + " " + "user-repos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a, {
    activeKey: tabKey,
    onChange: handleTabChange,
    animated: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
    tab: "\u4F60\u7684\u4ED3\u5E93",
    key: "1"
  }, userRepos.map(function (repo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: repo.id,
      repo: repo
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
    tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
    key: "2"
  }, userStaredRepos.map(function (repo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: repo.id,
      repo: repo
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2096139808"
  }, ".root.jsx-2096139808{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-2096139808{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2096139808{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2096139808{font-size:16px;color:#777;}.bio.jsx-2096139808{font-size:20px;color:#333;}.avatar.jsx-2096139808{width:100%;border-radius:5px;}.user-repos.jsx-2096139808{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXNCLEFBRzJCLEFBS0QsQUFPSSxBQUtELEFBSUEsQUFJSixBQUlDLFdBSE0sQ0FwQkEsR0FZUCxBQUlBLENBVEksVUFNaEIsQUFJQSxHQUlBLENBcEJlLENBT0UsZ0JBQ2pCLHdCQWVBLEdBN0J3QixZQU9WLDBFQUNTLHVCQVBQLGVBQ2hCLHdDQU9BIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sSWNvbixUYWJzfSBmcm9tICdhbnRkJyBcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlcix7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJ1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgYXBpPXJlcXVpcmUoJy4uL2xpYi9hcGknKVxyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxuY29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdyA9PT0ndW5kZWZpbmVkJ1xyXG5cclxuLy/ms6jmhI/nvJPlrZjlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/lhaznlKjnmoTmg4XlhrXvvIzlvJXlhaVpc1NlcnZlcuWIpOaWrSDlubbkuJTorr7nva7kuobml7bmlYhcclxuY29uc3QgY2FjaGU9bmV3IExSVSh7XHJcbiAgbWF4QWdlOjEwMDAqNjAqMTAgIC8v5pyA6ZW/MTBtaW7kuI3ljrvkvb/nlKjnvJPlrZjmlbDmja7lsLHmuIXnqbpcclxufSlcclxuIGZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlclN0YXJlZFJlcG9zLHVzZXIscm91dGVyfSl7XHJcbiAgY29uc29sZS5sb2codXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvcyx1c2VyLHJvdXRlcilcclxuICBjb25zdCB0YWJLZXk9cm91dGVyLnF1ZXJ5LmtleSB8fCAnMSc7XHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlPSBhY3RpdmVLZXkgPT57XHJcbiAgICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgfVxyXG4gIC8v56ys5LiA5qyh6L+b5p2l5Y+R546w5pyJ5pWw5o2u5bCx5Lya6KKr57yT5a2YXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZighaXNTZXJ2ZXIpe1xyXG4gICAgICAvL+S4jeaYr+acjeWKoeerr+eahOaDheWGteS4i++8jOWvueaVsOaNrui/m+ihjOe8k+WtmO+8jOaWueS+v+WGjeasoei/m+WFpeS4jemcgOimgeiwg+aOpeWPo1xyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJSZXBvcycsdXNlclJlcG9zKVxyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFyZWRSZXBvcycsdXNlclN0YXJlZFJlcG9zKVxyXG4gICAgfVxyXG4gIH0sW3VzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3NdKSAgLy/nm5HlkKzlj4LmlbDlj5HnlJ/lj5jljJbliJnkvJrosIPnlKhcclxuICAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT7ngrnlh7vnmbvlvZU8L0J1dHRvbj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdHtcclxuICAgICAgICAgIGhlaWdodDo0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgYH08L3N0eWxlPlxyXG4gICAgIDwvZGl2PlxyXG4gICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwidXNlciBhdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3ttYXJnaW5SaWdodDoxMH19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYWNrXCI+e3VzZXIuaHRtbF91cmx9PC9hPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAocmVwbz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAocmVwbz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAucm9vdHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOjA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW57XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ODAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjojNzc3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iaW97XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItcmVwb3N7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OjE7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gfVxyXG4gLy/mnI3liqHnq6/lkozlrqLmiLfnq6/pg73kvJrmiafooYxcclxuIC8qKlxyXG4gICog5a6i5oi356uv5YiH5o2i5LiO6K6/6ZeuSW5kZXjpobXpnaLmnI3liqHnq6/muLLmn5Ppg73kvJrmiafooYxnZXRJbml0aWFsUHJvcHNcclxuICAqIOWcqOacjeWKoeerr+a4suafk+eahOaXtuWAme+8jOi/kOihjOeOr+Wig+aYr+WkhOS6jm5vZGVqc+eOr+Wig++8jOiAjOS4jeaYr+WkhOS6jua1j+iniOWZqOeahOeOr+Wig1xyXG4gICog5Zyobm9kZWpz546v5aKD5LitYXhpb3MuZ2V0KCcvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcp5pa55byP6K+35rGC77yM5Lya6K+35rGCJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCflnLDlnYDvvIzov5nkuKrlnLDlnYDmmI7mmL7or7fmsYLkuI3miJDlip9cclxuICAqIOino+WGs+eahOaWueW8j+aYr+ivt+axgmFwaeaXtuWIpOaWreaYr+WQpuS4uuacjeWKoeerr++8jOaPkOWPluWHuuWFrOWFseeahGxpYi9hcGkuanNcclxuICAqIOWuouaIt+err+eahOivt+axguS8muWIsHNlcnZlci9hcGkuanPkuK3lgZrlpITnkIbvvIzov5Tlm57nu5nlrqLmiLfnq69cclxuICAqIOS7peS4iuWwseaYr+WQjOaehOeahOamguW/teKAlOKAlOWwseaYr+aciemDqOWIhuS7o+eggemDveWPr+iDveS8muWcqOWuouaIt+err+WSjOacjeWKoeerr+aJp+ihjO+8jOWboOatpOi/meauteS7o+eggeWwseimgemAguW6lOa1j+iniOWZqOeahOaJp+ihjOeOr+Wig++8jOS5n+imgemAguW6lG5vZGVqc+eahOaJp+ihjOeOr+Wig++8jOWboOatpOWBmuWMuuWIhuWkhOeQhu+8jOacgOe7iOaxh+mbhuWIsOS4gOS4queCuXJlcXVlc3RHaXRodWLkuIrpnaLvvIzkv53or4HlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/pg73lj6/mraPluLjmiafooYxcclxuICAqL1xyXG4gSW5kZXguZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4LHJlZHV4U3RvcmV9KT0+e1xyXG4gIC8vICBjb25zdCByZXN1bHQ9YXdhaXQgYXhpb3NcclxuICAvLyAgLmdldCgnL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnKVxyXG4gIC8vICAudGhlbihyZXNwPT5jb25zb2xlLmxvZyhyZXNwKSlcclxuICBjb25zdCB1c2VyPXJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyOyAvL+aLv+WIsOeUqOaIt+S/oeaBr1xyXG4gIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOmZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKCFpc1NlcnZlcil7XHJcbiAgICAvL+S4jeaYr+acjeWKoeerr+eahOaDheWGteS4i++8jOWvueaVsOaNrui/m+ihjOe8k+WtmO+8jOWGjeasoei/m+WFpeS4jemcgOimgeiwg+aOpeWPo++8jOebtOaOpei/lOWbnlxyXG4gICAgaWYoY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSYmY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOmNhY2hlLmdldCgndXNlclJlcG9zJyksXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvL2N0eC5yZXEsY3R4LnJlc+WPquacieWcqOacjeWKoeerr+a4suafk+aXtuaJjeS8muaciVxyXG4gIC8v6LCD55So5b2T5YmN55So5oi355qE5LuT5bqT5YiX6KGoXHJcbiAgY29uc3QgdXNlclJlcG9zPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvcmVwb3MnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzLFxyXG4gIClcclxuICAvL+iwg+eUqOWFs+azqOeahOS7k+W6k+WIl+ihqFxyXG4gIGNvbnN0IHVzZXJTdGFyZWRSZXBvcz0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzLFxyXG4gIClcclxuICAgcmV0dXJuIHtcclxuICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgdXNlclJlcG9zOnVzZXJSZXBvcy5kYXRhLFxyXG4gICAgIHVzZXJTdGFyZWRSZXBvczp1c2VyU3RhcmVkUmVwb3MuZGF0YVxyXG4gICB9XHJcbiB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFxyXG4gIGNvbm5lY3QoZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICB9XHJcbiAgfSkoSW5kZXgpLFxyXG4pIl19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\index.js */"));
} //服务端和客户端都会执行

/**
 * 客户端切换与访问Index页面服务端渲染都会执行getInitialProps
 * 在服务端渲染的时候，运行环境是处于nodejs环境，而不是处于浏览器的环境
 * 在nodejs环境中axios.get('/github/search/repositories?q=react')方式请求，会请求'http://localhost:80/github/search/repositories?q=react'地址，这个地址明显请求不成功
 * 解决的方式是请求api时判断是否为服务端，提取出公共的lib/api.js
 * 客户端的请求会到server/api.js中做处理，返回给客户端
 * 以上就是同构的概念——就是有部分代码都可能会在客户端和服务端执行，因此这段代码就要适应浏览器的执行环境，也要适应nodejs的执行环境，因此做区分处理，最终汇集到一个点requestGithub上面，保证在客户端和服务端都可正常执行
 */


Index.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, reduxStore, user, userRepos, userStaredRepos;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, reduxStore = _ref2.reduxStore;
            //  const result=await axios
            //  .get('/github/search/repositories?q=react')
            //  .then(resp=>console.log(resp))
            user = reduxStore.getState().user; //拿到用户信息

            if (!(!user || !user.id)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              isLogin: false
            });

          case 4:
            if (isServer) {
              _context.next = 7;
              break;
            }

            if (!(cache.get('userRepos') && cache.get('userStaredRepos'))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              userRepos: cache.get('userRepos'),
              userStaredRepos: cache.get('userStaredRepos')
            });

          case 7:
            _context.next = 9;
            return api.request({
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 9:
            userRepos = _context.sent;
            _context.next = 12;
            return api.request({
              url: '/user/starred'
            }, ctx.req, ctx.res);

          case 12:
            userStaredRepos = _context.sent;
            return _context.abrupt("return", {
              isLogin: true,
              userRepos: userRepos.data,
              userStaredRepos: userStaredRepos.data
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function mapState(state) {
  return {
    user: state.user
  };
})(Index)));

/***/ })

})
//# sourceMappingURL=index.js.4b954d80aafda51ac302.hot-update.js.map
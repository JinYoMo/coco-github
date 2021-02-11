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
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");













var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_7___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; //注意缓存在客户端和服务端公用的情况，引入isServer判断


var cacheUserRepos, cacheUserStaredRepos;
var isServer = typeof window === 'undefined';

function Index(_ref) {
  var userRepos = _ref.userRepos,
      userStaredRepos = _ref.userStaredRepos,
      user = _ref.user,
      router = _ref.router;
  console.log(userRepos, userStaredRepos, user, router);
  var tabKey = router.query.key || '1';

  var handleTabChange = function handleTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/?key=".concat(activeKey));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isServer) {
      //不是服务端的情况下，对数据进行缓存，方便再次进入不需要调接口
      cacheUserRepos = userRepos.data;
      cacheUserStaredRepos = userStaredRepos.data;
    }
  }, []);

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
    }, ".root.jsx-3888340167{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ21CLEFBR3VCLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3BCIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sSWNvbixUYWJzfSBmcm9tICdhbnRkJyBcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlcix7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nXHJcblxyXG5jb25zdCBhcGk9cmVxdWlyZSgnLi4vbGliL2FwaScpXHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXHJcblxyXG4vL+azqOaEj+e8k+WtmOWcqOWuouaIt+err+WSjOacjeWKoeerr+WFrOeUqOeahOaDheWGte+8jOW8leWFpWlzU2VydmVy5Yik5patXHJcbmxldCBjYWNoZVVzZXJSZXBvcyxjYWNoZVVzZXJTdGFyZWRSZXBvc1xyXG5cclxuY29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdyA9PT0ndW5kZWZpbmVkJ1xyXG5cclxuIGZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlclN0YXJlZFJlcG9zLHVzZXIscm91dGVyfSl7XHJcbiAgY29uc29sZS5sb2codXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvcyx1c2VyLHJvdXRlcilcclxuICBjb25zdCB0YWJLZXk9cm91dGVyLnF1ZXJ5LmtleSB8fCAnMSc7XHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlPSBhY3RpdmVLZXkgPT57XHJcbiAgICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoIWlzU2VydmVyKXtcclxuICAgICAgLy/kuI3mmK/mnI3liqHnq6/nmoTmg4XlhrXkuIvvvIzlr7nmlbDmja7ov5vooYznvJPlrZjvvIzmlrnkvr/lho3mrKHov5vlhaXkuI3pnIDopoHosIPmjqXlj6NcclxuICAgICAgY2FjaGVVc2VyUmVwb3M9dXNlclJlcG9zLmRhdGE7XHJcbiAgICAgIGNhY2hlVXNlclN0YXJlZFJlcG9zPXVzZXJTdGFyZWRSZXBvcy5kYXRhO1xyXG4gICAgfVxyXG4gIH0sW10pXHJcbiAgIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+54K55Ye755m75b2VPC9CdXR0b24+XHJcbiAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3R7XHJcbiAgICAgICAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgIGB9PC9zdHlsZT5cclxuICAgICA8L2Rpdj5cclxuICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cInVzZXIgYXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2lufTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibWFpbFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6MTB9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFja1wiPnt1c2VyLmh0bWxfdXJsfTwvYT5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgICAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKHJlcG89PihcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubWFwKHJlcG89PihcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnJvb3R7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItaW5mb3tcclxuICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICBmbGV4LXNocmluazowO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ2lue1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6Izc3NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmlve1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF2YXRhcntcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLXJlcG9ze1xyXG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzoxOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuIH1cclxuIC8v5pyN5Yqh56uv5ZKM5a6i5oi356uv6YO95Lya5omn6KGMXHJcbiAvKipcclxuICAqIOWuouaIt+err+WIh+aNouS4juiuv+mXrkluZGV46aG16Z2i5pyN5Yqh56uv5riy5p+T6YO95Lya5omn6KGMZ2V0SW5pdGlhbFByb3BzXHJcbiAgKiDlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnvvIzov5DooYznjq/looPmmK/lpITkuo5ub2RlanPnjq/looPvvIzogIzkuI3mmK/lpITkuo7mtY/op4jlmajnmoTnjq/looNcclxuICAqIOWcqG5vZGVqc+eOr+Wig+S4rWF4aW9zLmdldCgnL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnKeaWueW8j+ivt+axgu+8jOS8muivt+axgidodHRwOi8vbG9jYWxob3N0OjgwL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3Qn5Zyw5Z2A77yM6L+Z5Liq5Zyw5Z2A5piO5pi+6K+35rGC5LiN5oiQ5YqfXHJcbiAgKiDop6PlhrPnmoTmlrnlvI/mmK/or7fmsYJhcGnml7bliKTmlq3mmK/lkKbkuLrmnI3liqHnq6/vvIzmj5Dlj5blh7rlhazlhbHnmoRsaWIvYXBpLmpzXHJcbiAgKiDlrqLmiLfnq6/nmoTor7fmsYLkvJrliLBzZXJ2ZXIvYXBpLmpz5Lit5YGa5aSE55CG77yM6L+U5Zue57uZ5a6i5oi356uvXHJcbiAgKiDku6XkuIrlsLHmmK/lkIzmnoTnmoTmpoLlv7XigJTigJTlsLHmmK/mnInpg6jliIbku6PnoIHpg73lj6/og73kvJrlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/miafooYzvvIzlm6DmraTov5nmrrXku6PnoIHlsLHopoHpgILlupTmtY/op4jlmajnmoTmiafooYznjq/looPvvIzkuZ/opoHpgILlupRub2RlanPnmoTmiafooYznjq/looPvvIzlm6DmraTlgZrljLrliIblpITnkIbvvIzmnIDnu4jmsYfpm4bliLDkuIDkuKrngrlyZXF1ZXN0R2l0aHVi5LiK6Z2i77yM5L+d6K+B5Zyo5a6i5oi356uv5ZKM5pyN5Yqh56uv6YO95Y+v5q2j5bi45omn6KGMXHJcbiAgKi9cclxuIEluZGV4LmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eCxyZWR1eFN0b3JlfSk9PntcclxuICAvLyAgY29uc3QgcmVzdWx0PWF3YWl0IGF4aW9zXHJcbiAgLy8gIC5nZXQoJy9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0JylcclxuICAvLyAgLnRoZW4ocmVzcD0+Y29uc29sZS5sb2cocmVzcCkpXHJcbiAgY29uc3QgdXNlcj1yZWR1eFN0b3JlLmdldFN0YXRlKCkudXNlcjsgLy/mi7/liLDnlKjmiLfkv6Hmga9cclxuICBpZighdXNlcnx8IXVzZXIuaWQpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMb2dpbjpmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBpZighaXNTZXJ2ZXIpe1xyXG4gICAgLy/kuI3mmK/mnI3liqHnq6/nmoTmg4XlhrXkuIvvvIzlr7nmlbDmja7ov5vooYznvJPlrZjvvIzlho3mrKHov5vlhaXkuI3pnIDopoHosIPmjqXlj6PvvIznm7TmjqXov5Tlm55cclxuICAgIGlmKGNhY2hlVXNlclJlcG9zJiZjYWNoZVVzZXJTdGFyZWRSZXBvcyl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOmNhY2hlVXNlclJlcG9zLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczpjYWNoZVVzZXJTdGFyZWRSZXBvc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vY3R4LnJlcSxjdHgucmVz5Y+q5pyJ5Zyo5pyN5Yqh56uv5riy5p+T5pe25omN5Lya5pyJXHJcbiAgLy/osIPnlKjlvZPliY3nlKjmiLfnmoTku5PlupPliJfooahcclxuICBjb25zdCB1c2VyUmVwb3M9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXMsXHJcbiAgKVxyXG4gIC8v6LCD55So5YWz5rOo55qE5LuT5bqT5YiX6KGoXHJcbiAgY29uc3QgdXNlclN0YXJlZFJlcG9zPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXMsXHJcbiAgKVxyXG4gICByZXR1cm4ge1xyXG4gICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICB1c2VyUmVwb3M6dXNlclJlcG9zLmRhdGEsXHJcbiAgICAgdXNlclN0YXJlZFJlcG9zOnVzZXJTdGFyZWRSZXBvcy5kYXRhXHJcbiAgIH1cclxuIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH1cclxuICB9KShJbmRleCksXHJcbikiXX0= */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\index.js */"));
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: repo.id,
      repo: repo
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
    tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
    key: "2"
  }, userStaredRepos.map(function (repo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: repo.id,
      repo: repo
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2096139808"
  }, ".root.jsx-2096139808{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-2096139808{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2096139808{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2096139808{font-size:16px;color:#777;}.bio.jsx-2096139808{font-size:20px;color:#333;}.avatar.jsx-2096139808{width:100%;border-radius:5px;}.user-repos.jsx-2096139808{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RXNCLEFBRzJCLEFBS0QsQUFPSSxBQUtELEFBSUEsQUFJSixBQUlDLFdBSE0sQ0FwQkEsR0FZUCxBQUlBLENBVEksVUFNaEIsQUFJQSxHQUlBLENBcEJlLENBT0UsZ0JBQ2pCLHdCQWVBLEdBN0J3QixZQU9WLDBFQUNTLHVCQVBQLGVBQ2hCLHdDQU9BIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sSWNvbixUYWJzfSBmcm9tICdhbnRkJyBcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlcix7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nXHJcblxyXG5jb25zdCBhcGk9cmVxdWlyZSgnLi4vbGliL2FwaScpXHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXHJcblxyXG4vL+azqOaEj+e8k+WtmOWcqOWuouaIt+err+WSjOacjeWKoeerr+WFrOeUqOeahOaDheWGte+8jOW8leWFpWlzU2VydmVy5Yik5patXHJcbmxldCBjYWNoZVVzZXJSZXBvcyxjYWNoZVVzZXJTdGFyZWRSZXBvc1xyXG5cclxuY29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdyA9PT0ndW5kZWZpbmVkJ1xyXG5cclxuIGZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlclN0YXJlZFJlcG9zLHVzZXIscm91dGVyfSl7XHJcbiAgY29uc29sZS5sb2codXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvcyx1c2VyLHJvdXRlcilcclxuICBjb25zdCB0YWJLZXk9cm91dGVyLnF1ZXJ5LmtleSB8fCAnMSc7XHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlPSBhY3RpdmVLZXkgPT57XHJcbiAgICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoIWlzU2VydmVyKXtcclxuICAgICAgLy/kuI3mmK/mnI3liqHnq6/nmoTmg4XlhrXkuIvvvIzlr7nmlbDmja7ov5vooYznvJPlrZjvvIzmlrnkvr/lho3mrKHov5vlhaXkuI3pnIDopoHosIPmjqXlj6NcclxuICAgICAgY2FjaGVVc2VyUmVwb3M9dXNlclJlcG9zLmRhdGE7XHJcbiAgICAgIGNhY2hlVXNlclN0YXJlZFJlcG9zPXVzZXJTdGFyZWRSZXBvcy5kYXRhO1xyXG4gICAgfVxyXG4gIH0sW10pXHJcbiAgIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+54K55Ye755m75b2VPC9CdXR0b24+XHJcbiAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3R7XHJcbiAgICAgICAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgIGB9PC9zdHlsZT5cclxuICAgICA8L2Rpdj5cclxuICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cInVzZXIgYXZhdGFyXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2lufTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibWFpbFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6MTB9fT48L0ljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFja1wiPnt1c2VyLmh0bWxfdXJsfTwvYT5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgICAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKHJlcG89PihcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubWFwKHJlcG89PihcclxuICAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnJvb3R7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItaW5mb3tcclxuICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICBmbGV4LXNocmluazowO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ2lue1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6Izc3NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmlve1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF2YXRhcntcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLXJlcG9ze1xyXG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzoxOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuIH1cclxuIC8v5pyN5Yqh56uv5ZKM5a6i5oi356uv6YO95Lya5omn6KGMXHJcbiAvKipcclxuICAqIOWuouaIt+err+WIh+aNouS4juiuv+mXrkluZGV46aG16Z2i5pyN5Yqh56uv5riy5p+T6YO95Lya5omn6KGMZ2V0SW5pdGlhbFByb3BzXHJcbiAgKiDlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnvvIzov5DooYznjq/looPmmK/lpITkuo5ub2RlanPnjq/looPvvIzogIzkuI3mmK/lpITkuo7mtY/op4jlmajnmoTnjq/looNcclxuICAqIOWcqG5vZGVqc+eOr+Wig+S4rWF4aW9zLmdldCgnL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnKeaWueW8j+ivt+axgu+8jOS8muivt+axgidodHRwOi8vbG9jYWxob3N0OjgwL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3Qn5Zyw5Z2A77yM6L+Z5Liq5Zyw5Z2A5piO5pi+6K+35rGC5LiN5oiQ5YqfXHJcbiAgKiDop6PlhrPnmoTmlrnlvI/mmK/or7fmsYJhcGnml7bliKTmlq3mmK/lkKbkuLrmnI3liqHnq6/vvIzmj5Dlj5blh7rlhazlhbHnmoRsaWIvYXBpLmpzXHJcbiAgKiDlrqLmiLfnq6/nmoTor7fmsYLkvJrliLBzZXJ2ZXIvYXBpLmpz5Lit5YGa5aSE55CG77yM6L+U5Zue57uZ5a6i5oi356uvXHJcbiAgKiDku6XkuIrlsLHmmK/lkIzmnoTnmoTmpoLlv7XigJTigJTlsLHmmK/mnInpg6jliIbku6PnoIHpg73lj6/og73kvJrlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/miafooYzvvIzlm6DmraTov5nmrrXku6PnoIHlsLHopoHpgILlupTmtY/op4jlmajnmoTmiafooYznjq/looPvvIzkuZ/opoHpgILlupRub2RlanPnmoTmiafooYznjq/looPvvIzlm6DmraTlgZrljLrliIblpITnkIbvvIzmnIDnu4jmsYfpm4bliLDkuIDkuKrngrlyZXF1ZXN0R2l0aHVi5LiK6Z2i77yM5L+d6K+B5Zyo5a6i5oi356uv5ZKM5pyN5Yqh56uv6YO95Y+v5q2j5bi45omn6KGMXHJcbiAgKi9cclxuIEluZGV4LmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eCxyZWR1eFN0b3JlfSk9PntcclxuICAvLyAgY29uc3QgcmVzdWx0PWF3YWl0IGF4aW9zXHJcbiAgLy8gIC5nZXQoJy9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0JylcclxuICAvLyAgLnRoZW4ocmVzcD0+Y29uc29sZS5sb2cocmVzcCkpXHJcbiAgY29uc3QgdXNlcj1yZWR1eFN0b3JlLmdldFN0YXRlKCkudXNlcjsgLy/mi7/liLDnlKjmiLfkv6Hmga9cclxuICBpZighdXNlcnx8IXVzZXIuaWQpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMb2dpbjpmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBpZighaXNTZXJ2ZXIpe1xyXG4gICAgLy/kuI3mmK/mnI3liqHnq6/nmoTmg4XlhrXkuIvvvIzlr7nmlbDmja7ov5vooYznvJPlrZjvvIzlho3mrKHov5vlhaXkuI3pnIDopoHosIPmjqXlj6PvvIznm7TmjqXov5Tlm55cclxuICAgIGlmKGNhY2hlVXNlclJlcG9zJiZjYWNoZVVzZXJTdGFyZWRSZXBvcyl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOmNhY2hlVXNlclJlcG9zLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczpjYWNoZVVzZXJTdGFyZWRSZXBvc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vY3R4LnJlcSxjdHgucmVz5Y+q5pyJ5Zyo5pyN5Yqh56uv5riy5p+T5pe25omN5Lya5pyJXHJcbiAgLy/osIPnlKjlvZPliY3nlKjmiLfnmoTku5PlupPliJfooahcclxuICBjb25zdCB1c2VyUmVwb3M9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXMsXHJcbiAgKVxyXG4gIC8v6LCD55So5YWz5rOo55qE5LuT5bqT5YiX6KGoXHJcbiAgY29uc3QgdXNlclN0YXJlZFJlcG9zPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXMsXHJcbiAgKVxyXG4gICByZXR1cm4ge1xyXG4gICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICB1c2VyUmVwb3M6dXNlclJlcG9zLmRhdGEsXHJcbiAgICAgdXNlclN0YXJlZFJlcG9zOnVzZXJTdGFyZWRSZXBvcy5kYXRhXHJcbiAgIH1cclxuIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH1cclxuICB9KShJbmRleCksXHJcbikiXX0= */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\index.js */"));
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

            if (!(cacheUserRepos && cacheUserStaredRepos)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              userRepos: cacheUserRepos,
              userStaredRepos: cacheUserStaredRepos
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
//# sourceMappingURL=index.js.1546a30f9b13f8f46598.hot-update.js.map
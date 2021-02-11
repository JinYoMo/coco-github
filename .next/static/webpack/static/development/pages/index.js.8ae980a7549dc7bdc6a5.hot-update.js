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

var cachedUserRepos, cachedUserStaredRepos;
var isServer = typeof window === 'undefined'; //注意缓存在客户端和服务端公用的情况，引入isServer判断 并且设置了时效
// const cache=new LRU({
//   maxAge:1000*60*10  //最长10min不去使用缓存数据就清空
// })

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
      cachedUserRepos = userRepos;
      cachedUserStaredRepos = userStaredRepos; // //不是服务端的情况下，对数据进行缓存，方便再次进入不需要调接口
      // if(userRepos){
      //   cache.set('userRepos',userRepos)
      // }
      // if(userStaredRepos){
      //   cache.set('userStaredRepos',userStaredRepos)
      // }

      var timeout = setTimeout(function () {
        cachedUserRepos = null;
        cachedUserStaredRepos = null;
      }, 1000 * 60 * 10); //10min必须清空策略
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
    }, ".root.jsx-3888340167{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG1CLEFBR3VCLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3BCIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sSWNvbixUYWJzfSBmcm9tICdhbnRkJyBcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlcix7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJ1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgYXBpPXJlcXVpcmUoJy4uL2xpYi9hcGknKVxyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxubGV0IGNhY2hlZFVzZXJSZXBvcywgY2FjaGVkVXNlclN0YXJlZFJlcG9zXHJcblxyXG5jb25zdCBpc1NlcnZlcj10eXBlb2Ygd2luZG93ID09PSd1bmRlZmluZWQnXHJcblxyXG4vL+azqOaEj+e8k+WtmOWcqOWuouaIt+err+WSjOacjeWKoeerr+WFrOeUqOeahOaDheWGte+8jOW8leWFpWlzU2VydmVy5Yik5patIOW5tuS4lOiuvue9ruS6huaXtuaViFxyXG4vLyBjb25zdCBjYWNoZT1uZXcgTFJVKHtcclxuLy8gICBtYXhBZ2U6MTAwMCo2MCoxMCAgLy/mnIDplb8xMG1pbuS4jeWOu+S9v+eUqOe8k+WtmOaVsOaNruWwsea4heepulxyXG4vLyB9KVxyXG4gZnVuY3Rpb24gSW5kZXgoe3VzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3MsdXNlcixyb3V0ZXJ9KXtcclxuICBjb25zb2xlLmxvZyh1c2VyUmVwb3MsdXNlclN0YXJlZFJlcG9zLHVzZXIscm91dGVyKVxyXG4gIGNvbnN0IHRhYktleT1yb3V0ZXIucXVlcnkua2V5IHx8ICcxJztcclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2U9IGFjdGl2ZUtleSA9PntcclxuICAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YClcclxuICB9XHJcbiAgLy/nrKzkuIDmrKHov5vmnaXlj5HnjrDmnInmlbDmja7lsLHkvJrooqvnvJPlrZhcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKCFpc1NlcnZlcil7XHJcbiAgICAgIGNhY2hlZFVzZXJSZXBvcyA9IHVzZXJSZXBvc1xyXG4gICAgICBjYWNoZWRVc2VyU3RhcmVkUmVwb3MgPSB1c2VyU3RhcmVkUmVwb3NcclxuICAgICAgLy8gLy/kuI3mmK/mnI3liqHnq6/nmoTmg4XlhrXkuIvvvIzlr7nmlbDmja7ov5vooYznvJPlrZjvvIzmlrnkvr/lho3mrKHov5vlhaXkuI3pnIDopoHosIPmjqXlj6NcclxuICAgICAgLy8gaWYodXNlclJlcG9zKXtcclxuICAgICAgLy8gICBjYWNoZS5zZXQoJ3VzZXJSZXBvcycsdXNlclJlcG9zKVxyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGlmKHVzZXJTdGFyZWRSZXBvcyl7XHJcbiAgICAgIC8vICAgY2FjaGUuc2V0KCd1c2VyU3RhcmVkUmVwb3MnLHVzZXJTdGFyZWRSZXBvcylcclxuICAgICAgLy8gfVxyXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2FjaGVkVXNlclJlcG9zID0gbnVsbFxyXG4gICAgICAgIGNhY2hlZFVzZXJTdGFyZWRSZXBvcyA9IG51bGxcclxuICAgICAgfSwgMTAwMCAqIDYwICogMTApICAvLzEwbWlu5b+F6aG75riF56m6562W55WlXHJcbiAgICB9XHJcbiAgfSxbdXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvc10pICAvL+ebkeWQrOWPguaVsOWPkeeUn+WPmOWMluWImeS8muiwg+eUqFxyXG4gICBpZighdXNlcnx8IXVzZXIuaWQpe1xyXG4gICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgIDxwPuS6su+8jOaCqOi/mOayoeacieeZu+W9leWTpn48L3A+XHJcbiAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PueCueWHu+eZu+W9lTwvQnV0dG9uPlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290e1xyXG4gICAgICAgICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgPC9kaXY+XHJcbiAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cIm1haWxcIiBzdHlsZT17e21hcmdpblJpZ2h0OjEwfX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXt1c2VyLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhY2tcIj57dXNlci5odG1sX3VybH08L2E+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclJlcG9zLm1hcChyZXBvPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVwbyBrZXk9e3JlcG8uaWR9IHJlcG89e3JlcG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLm1hcChyZXBvPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVwbyBrZXk9e3JlcG8uaWR9IHJlcG89e3JlcG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5yb290e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6MjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLWluZm97XHJcbiAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgICAgZmxleC1zaHJpbms6MDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dpbntcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDo4MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiM3Nzc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJpb3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICBjb2xvcjojMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1yZXBvc3tcclxuICAgICAgICAgICAgICBmbGV4LWdyb3c6MTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiB9XHJcbiAvL+acjeWKoeerr+WSjOWuouaIt+err+mDveS8muaJp+ihjFxyXG4gLyoqXHJcbiAgKiDlrqLmiLfnq6/liIfmjaLkuI7orr/pl65JbmRleOmhtemdouacjeWKoeerr+a4suafk+mDveS8muaJp+ihjGdldEluaXRpYWxQcm9wc1xyXG4gICog5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ77yM6L+Q6KGM546v5aKD5piv5aSE5LqObm9kZWpz546v5aKD77yM6ICM5LiN5piv5aSE5LqO5rWP6KeI5Zmo55qE546v5aKDXHJcbiAgKiDlnKhub2RlanPnjq/looPkuK1heGlvcy5nZXQoJy9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0JynmlrnlvI/or7fmsYLvvIzkvJror7fmsYInaHR0cDovL2xvY2FsaG9zdDo4MC9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0J+WcsOWdgO+8jOi/meS4quWcsOWdgOaYjuaYvuivt+axguS4jeaIkOWKn1xyXG4gICog6Kej5Yaz55qE5pa55byP5piv6K+35rGCYXBp5pe25Yik5pat5piv5ZCm5Li65pyN5Yqh56uv77yM5o+Q5Y+W5Ye65YWs5YWx55qEbGliL2FwaS5qc1xyXG4gICog5a6i5oi356uv55qE6K+35rGC5Lya5Yiwc2VydmVyL2FwaS5qc+S4reWBmuWkhOeQhu+8jOi/lOWbnue7meWuouaIt+err1xyXG4gICog5Lul5LiK5bCx5piv5ZCM5p6E55qE5qaC5b+14oCU4oCU5bCx5piv5pyJ6YOo5YiG5Luj56CB6YO95Y+v6IO95Lya5Zyo5a6i5oi356uv5ZKM5pyN5Yqh56uv5omn6KGM77yM5Zug5q2k6L+Z5q615Luj56CB5bCx6KaB6YCC5bqU5rWP6KeI5Zmo55qE5omn6KGM546v5aKD77yM5Lmf6KaB6YCC5bqUbm9kZWpz55qE5omn6KGM546v5aKD77yM5Zug5q2k5YGa5Yy65YiG5aSE55CG77yM5pyA57uI5rGH6ZuG5Yiw5LiA5Liq54K5cmVxdWVzdEdpdGh1YuS4iumdou+8jOS/neivgeWcqOWuouaIt+err+WSjOacjeWKoeerr+mDveWPr+ato+W4uOaJp+ihjFxyXG4gICovXHJcbiBJbmRleC5nZXRJbml0aWFsUHJvcHM9YXN5bmMgKHtjdHgscmVkdXhTdG9yZX0pPT57XHJcbiAgLy8gIGNvbnN0IHJlc3VsdD1hd2FpdCBheGlvc1xyXG4gIC8vICAuZ2V0KCcvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcpXHJcbiAgLy8gIC50aGVuKHJlc3A9PmNvbnNvbGUubG9nKHJlc3ApKVxyXG4gIGNvbnN0IHVzZXI9cmVkdXhTdG9yZS5nZXRTdGF0ZSgpLnVzZXI7IC8v5ou/5Yiw55So5oi35L+h5oGvXHJcbiAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzTG9naW46ZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIC8v5LiN5piv5pyN5Yqh56uv55qE5oOF5Ya15LiL77yM5a+55pWw5o2u6L+b6KGM57yT5a2Y77yM5YaN5qyh6L+b5YWl5LiN6ZyA6KaB6LCD5o6l5Y+j77yM55u05o6l6L+U5ZueXHJcbiAgICAvLyBpZihjYWNoZS5nZXQoJ3VzZXJSZXBvcycpJiZjYWNoZS5nZXQoJ3VzZXJTdGFyZWRSZXBvcycpKXtcclxuICAgIC8vICAgcmV0dXJuIHtcclxuICAgIC8vICAgICB1c2VyUmVwb3M6Y2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSxcclxuICAgIC8vICAgICB1c2VyU3RhcmVkUmVwb3M6Y2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICBpZiAoY2FjaGVkVXNlclJlcG9zICYmIGNhY2hlZFVzZXJTdGFyZWRSZXBvcykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJSZXBvczogY2FjaGVkVXNlclJlcG9zLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGVkVXNlclN0YXJlZFJlcG9zLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vY3R4LnJlcSxjdHgucmVz5Y+q5pyJ5Zyo5pyN5Yqh56uv5riy5p+T5pe25omN5Lya5pyJXHJcbiAgLy/osIPnlKjlvZPliY3nlKjmiLfnmoTku5PlupPliJfooahcclxuICBjb25zdCB1c2VyUmVwb3M9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXMsXHJcbiAgKVxyXG4gIC8v6LCD55So5YWz5rOo55qE5LuT5bqT5YiX6KGoXHJcbiAgY29uc3QgdXNlclN0YXJlZFJlcG9zPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXMsXHJcbiAgKVxyXG4gICByZXR1cm4ge1xyXG4gICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICB1c2VyUmVwb3M6dXNlclJlcG9zLmRhdGEsXHJcbiAgICAgdXNlclN0YXJlZFJlcG9zOnVzZXJTdGFyZWRSZXBvcy5kYXRhXHJcbiAgIH1cclxuIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH1cclxuICB9KShJbmRleCksXHJcbikiXX0= */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\index.js */"));
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
  }, ".root.jsx-2096139808{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-2096139808{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2096139808{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2096139808{font-size:16px;color:#777;}.bio.jsx-2096139808{font-size:20px;color:#333;}.avatar.jsx-2096139808{width:100%;border-radius:5px;}.user-repos.jsx-2096139808{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRnNCLEFBRzJCLEFBS0QsQUFPSSxBQUtELEFBSUEsQUFJSixBQUlDLFdBSE0sQ0FwQkEsR0FZUCxBQUlBLENBVEksVUFNaEIsQUFJQSxHQUlBLENBcEJlLENBT0UsZ0JBQ2pCLHdCQWVBLEdBN0J3QixZQU9WLDBFQUNTLHVCQVBQLGVBQ2hCLHdDQU9BIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sSWNvbixUYWJzfSBmcm9tICdhbnRkJyBcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlcix7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJ1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgYXBpPXJlcXVpcmUoJy4uL2xpYi9hcGknKVxyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxubGV0IGNhY2hlZFVzZXJSZXBvcywgY2FjaGVkVXNlclN0YXJlZFJlcG9zXHJcblxyXG5jb25zdCBpc1NlcnZlcj10eXBlb2Ygd2luZG93ID09PSd1bmRlZmluZWQnXHJcblxyXG4vL+azqOaEj+e8k+WtmOWcqOWuouaIt+err+WSjOacjeWKoeerr+WFrOeUqOeahOaDheWGte+8jOW8leWFpWlzU2VydmVy5Yik5patIOW5tuS4lOiuvue9ruS6huaXtuaViFxyXG4vLyBjb25zdCBjYWNoZT1uZXcgTFJVKHtcclxuLy8gICBtYXhBZ2U6MTAwMCo2MCoxMCAgLy/mnIDplb8xMG1pbuS4jeWOu+S9v+eUqOe8k+WtmOaVsOaNruWwsea4heepulxyXG4vLyB9KVxyXG4gZnVuY3Rpb24gSW5kZXgoe3VzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3MsdXNlcixyb3V0ZXJ9KXtcclxuICBjb25zb2xlLmxvZyh1c2VyUmVwb3MsdXNlclN0YXJlZFJlcG9zLHVzZXIscm91dGVyKVxyXG4gIGNvbnN0IHRhYktleT1yb3V0ZXIucXVlcnkua2V5IHx8ICcxJztcclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2U9IGFjdGl2ZUtleSA9PntcclxuICAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YClcclxuICB9XHJcbiAgLy/nrKzkuIDmrKHov5vmnaXlj5HnjrDmnInmlbDmja7lsLHkvJrooqvnvJPlrZhcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKCFpc1NlcnZlcil7XHJcbiAgICAgIGNhY2hlZFVzZXJSZXBvcyA9IHVzZXJSZXBvc1xyXG4gICAgICBjYWNoZWRVc2VyU3RhcmVkUmVwb3MgPSB1c2VyU3RhcmVkUmVwb3NcclxuICAgICAgLy8gLy/kuI3mmK/mnI3liqHnq6/nmoTmg4XlhrXkuIvvvIzlr7nmlbDmja7ov5vooYznvJPlrZjvvIzmlrnkvr/lho3mrKHov5vlhaXkuI3pnIDopoHosIPmjqXlj6NcclxuICAgICAgLy8gaWYodXNlclJlcG9zKXtcclxuICAgICAgLy8gICBjYWNoZS5zZXQoJ3VzZXJSZXBvcycsdXNlclJlcG9zKVxyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGlmKHVzZXJTdGFyZWRSZXBvcyl7XHJcbiAgICAgIC8vICAgY2FjaGUuc2V0KCd1c2VyU3RhcmVkUmVwb3MnLHVzZXJTdGFyZWRSZXBvcylcclxuICAgICAgLy8gfVxyXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2FjaGVkVXNlclJlcG9zID0gbnVsbFxyXG4gICAgICAgIGNhY2hlZFVzZXJTdGFyZWRSZXBvcyA9IG51bGxcclxuICAgICAgfSwgMTAwMCAqIDYwICogMTApICAvLzEwbWlu5b+F6aG75riF56m6562W55WlXHJcbiAgICB9XHJcbiAgfSxbdXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvc10pICAvL+ebkeWQrOWPguaVsOWPkeeUn+WPmOWMluWImeS8muiwg+eUqFxyXG4gICBpZighdXNlcnx8IXVzZXIuaWQpe1xyXG4gICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgIDxwPuS6su+8jOaCqOi/mOayoeacieeZu+W9leWTpn48L3A+XHJcbiAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PueCueWHu+eZu+W9lTwvQnV0dG9uPlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290e1xyXG4gICAgICAgICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgPC9kaXY+XHJcbiAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cIm1haWxcIiBzdHlsZT17e21hcmdpblJpZ2h0OjEwfX0+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXt1c2VyLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhY2tcIj57dXNlci5odG1sX3VybH08L2E+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclJlcG9zLm1hcChyZXBvPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVwbyBrZXk9e3JlcG8uaWR9IHJlcG89e3JlcG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLm1hcChyZXBvPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmVwbyBrZXk9e3JlcG8uaWR9IHJlcG89e3JlcG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5yb290e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6MjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLWluZm97XHJcbiAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgICAgZmxleC1zaHJpbms6MDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dpbntcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDo4MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiM3Nzc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJpb3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICBjb2xvcjojMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1yZXBvc3tcclxuICAgICAgICAgICAgICBmbGV4LWdyb3c6MTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiB9XHJcbiAvL+acjeWKoeerr+WSjOWuouaIt+err+mDveS8muaJp+ihjFxyXG4gLyoqXHJcbiAgKiDlrqLmiLfnq6/liIfmjaLkuI7orr/pl65JbmRleOmhtemdouacjeWKoeerr+a4suafk+mDveS8muaJp+ihjGdldEluaXRpYWxQcm9wc1xyXG4gICog5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ77yM6L+Q6KGM546v5aKD5piv5aSE5LqObm9kZWpz546v5aKD77yM6ICM5LiN5piv5aSE5LqO5rWP6KeI5Zmo55qE546v5aKDXHJcbiAgKiDlnKhub2RlanPnjq/looPkuK1heGlvcy5nZXQoJy9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0JynmlrnlvI/or7fmsYLvvIzkvJror7fmsYInaHR0cDovL2xvY2FsaG9zdDo4MC9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0J+WcsOWdgO+8jOi/meS4quWcsOWdgOaYjuaYvuivt+axguS4jeaIkOWKn1xyXG4gICog6Kej5Yaz55qE5pa55byP5piv6K+35rGCYXBp5pe25Yik5pat5piv5ZCm5Li65pyN5Yqh56uv77yM5o+Q5Y+W5Ye65YWs5YWx55qEbGliL2FwaS5qc1xyXG4gICog5a6i5oi356uv55qE6K+35rGC5Lya5Yiwc2VydmVyL2FwaS5qc+S4reWBmuWkhOeQhu+8jOi/lOWbnue7meWuouaIt+err1xyXG4gICog5Lul5LiK5bCx5piv5ZCM5p6E55qE5qaC5b+14oCU4oCU5bCx5piv5pyJ6YOo5YiG5Luj56CB6YO95Y+v6IO95Lya5Zyo5a6i5oi356uv5ZKM5pyN5Yqh56uv5omn6KGM77yM5Zug5q2k6L+Z5q615Luj56CB5bCx6KaB6YCC5bqU5rWP6KeI5Zmo55qE5omn6KGM546v5aKD77yM5Lmf6KaB6YCC5bqUbm9kZWpz55qE5omn6KGM546v5aKD77yM5Zug5q2k5YGa5Yy65YiG5aSE55CG77yM5pyA57uI5rGH6ZuG5Yiw5LiA5Liq54K5cmVxdWVzdEdpdGh1YuS4iumdou+8jOS/neivgeWcqOWuouaIt+err+WSjOacjeWKoeerr+mDveWPr+ato+W4uOaJp+ihjFxyXG4gICovXHJcbiBJbmRleC5nZXRJbml0aWFsUHJvcHM9YXN5bmMgKHtjdHgscmVkdXhTdG9yZX0pPT57XHJcbiAgLy8gIGNvbnN0IHJlc3VsdD1hd2FpdCBheGlvc1xyXG4gIC8vICAuZ2V0KCcvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcpXHJcbiAgLy8gIC50aGVuKHJlc3A9PmNvbnNvbGUubG9nKHJlc3ApKVxyXG4gIGNvbnN0IHVzZXI9cmVkdXhTdG9yZS5nZXRTdGF0ZSgpLnVzZXI7IC8v5ou/5Yiw55So5oi35L+h5oGvXHJcbiAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzTG9naW46ZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIC8v5LiN5piv5pyN5Yqh56uv55qE5oOF5Ya15LiL77yM5a+55pWw5o2u6L+b6KGM57yT5a2Y77yM5YaN5qyh6L+b5YWl5LiN6ZyA6KaB6LCD5o6l5Y+j77yM55u05o6l6L+U5ZueXHJcbiAgICAvLyBpZihjYWNoZS5nZXQoJ3VzZXJSZXBvcycpJiZjYWNoZS5nZXQoJ3VzZXJTdGFyZWRSZXBvcycpKXtcclxuICAgIC8vICAgcmV0dXJuIHtcclxuICAgIC8vICAgICB1c2VyUmVwb3M6Y2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSxcclxuICAgIC8vICAgICB1c2VyU3RhcmVkUmVwb3M6Y2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICBpZiAoY2FjaGVkVXNlclJlcG9zICYmIGNhY2hlZFVzZXJTdGFyZWRSZXBvcykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJSZXBvczogY2FjaGVkVXNlclJlcG9zLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGVkVXNlclN0YXJlZFJlcG9zLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vY3R4LnJlcSxjdHgucmVz5Y+q5pyJ5Zyo5pyN5Yqh56uv5riy5p+T5pe25omN5Lya5pyJXHJcbiAgLy/osIPnlKjlvZPliY3nlKjmiLfnmoTku5PlupPliJfooahcclxuICBjb25zdCB1c2VyUmVwb3M9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXMsXHJcbiAgKVxyXG4gIC8v6LCD55So5YWz5rOo55qE5LuT5bqT5YiX6KGoXHJcbiAgY29uc3QgdXNlclN0YXJlZFJlcG9zPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXMsXHJcbiAgKVxyXG4gICByZXR1cm4ge1xyXG4gICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICB1c2VyUmVwb3M6dXNlclJlcG9zLmRhdGEsXHJcbiAgICAgdXNlclN0YXJlZFJlcG9zOnVzZXJTdGFyZWRSZXBvcy5kYXRhXHJcbiAgIH1cclxuIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH1cclxuICB9KShJbmRleCksXHJcbikiXX0= */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\index.js */"));
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

            if (!(cachedUserRepos && cachedUserStaredRepos)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              userRepos: cachedUserRepos,
              userStaredRepos: cachedUserStaredRepos
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
//# sourceMappingURL=index.js.8ae980a7549dc7bdc6a5.hot-update.js.map
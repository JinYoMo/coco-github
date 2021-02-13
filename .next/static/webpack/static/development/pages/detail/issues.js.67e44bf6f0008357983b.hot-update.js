webpackHotUpdate("static\\development\\pages\\detail\\issues.js",{

/***/ "./components/with-repo-basic.jsx":
/*!****************************************!*\
  !*** ./components/with-repo-basic.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/repo-basic-cache */ "./lib/repo-basic-cache.js");













function makeQuery(queryObject) {
  var query = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(queryObject).reduce(function (result, entry) {
    result.push(entry.join('='));
    return result;
  }, []).join('&');

  return "?".concat(query);
}

var isServer = typeof window === 'undefined';
/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'index';

  function WithDetail(_ref) {
    var repoBasic = _ref.repoBasic,
        router = _ref.router,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["repoBasic", "router"]);

    console.log(repoBasic, router);
    var query1 = makeQuery(router.query);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1060587426" + " " + "root"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1060587426" + " " + "repo-basic"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Repo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      repo: repoBasic
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1060587426" + " " + "tabs"
    }, type === 'index' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "jsx-1060587426" + " " + "tab"
    }, "Readme") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/detail".concat(query1)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-1060587426" + " " + "tab index"
    }, "Readme")), type === 'issues' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "jsx-1060587426" + " " + "tab"
    }, "Issues") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/detail/issues".concat(query1)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-1060587426" + " " + "tab issues"
    }, "Issues")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1060587426"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Comp, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "1060587426"
    }, ".root.jsx-1060587426{padding-top:20px;}.repo-basic.jsx-1060587426{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1060587426+.tab.jsx-1060587426{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXGNvbXBvbmVudHNcXHdpdGgtcmVwby1iYXNpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUdnQyxBQUdKLEFBTUksYUFMSyxJQUh4QixBQVNBLGtCQUxxQixtQkFDRCxrQkFDcEIiLCJmaWxlIjoiRTpcXOS4quS6uumhueebrlxcZ2l0SHVi6aG555uuXFxjb2NvLWdpdGh1YlxcY29tcG9uZW50c1xcd2l0aC1yZXBvLWJhc2ljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVwbyBmcm9tICcuL1JlcG8nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2xpYi9hcGknXHJcbmltcG9ydCB7IGdldCwgY2FjaGUgfSBmcm9tICcuLi9saWIvcmVwby1iYXNpYy1jYWNoZSdcclxuXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeSAocXVlcnlPYmplY3QpIHtcclxuICBjb25zdCBxdWVyeSA9IE9iamVjdC5lbnRyaWVzKHF1ZXJ5T2JqZWN0KVxyXG4gICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xyXG4gICAgICByZXN1bHQucHVzaChlbnRyeS5qb2luKCc9JykpXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LCBbXSkuam9pbignJicpXHJcbiAgcmV0dXJuIGA/JHtxdWVyeX1gXHJcbn1cclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKENvbXAsIHR5cGUgPSAnaW5kZXgnKSB7XHJcblxyXG4gIGZ1bmN0aW9uIFdpdGhEZXRhaWwgKHsgcmVwb0Jhc2ljLCByb3V0ZXIsIC4uLnJlc3QgfSkge1xyXG4gICAgY29uc29sZS5sb2cocmVwb0Jhc2ljLCByb3V0ZXIpXHJcbiAgICBjb25zdCBxdWVyeTEgPSBtYWtlUXVlcnkocm91dGVyLnF1ZXJ5KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XHJcbiAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvQmFzaWN9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAge3R5cGUgPT09ICdpbmRleCcgPyA8c3BhbiBjbGFzc05hbWU9XCJ0YWJcIj5SZWFkbWU8L3NwYW4+IDogPExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5MX1gfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgIHt0eXBlID09PSAnaXNzdWVzJyA/IDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPklzc3Vlczwvc3Bhbj4gOiA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5MX1gfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaXNzdWVzXCI+SXNzdWVzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj48Q29tcCB7Li4ucmVzdH0gLz48L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVwby1iYXNpYyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50YWIgKyAudGFiIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIFdpdGhEZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgcm91dGVyLCBjdHggfSA9IGNvbnRleHRcclxuICAgIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxyXG5cclxuICAgIGNvbnN0IGZ1bGxfbmFtZSA9IGAke293bmVyfS8ke25hbWV9YFxyXG5cclxuICAgIC8v5Y+v5Lul6LCD55So5YWs55So5biD5bGA5LmL5aSW5YW25LuW57uE5Lu255qEZ2V0SW5pdGlhbFByb3Bz5pWw5o2u6K+35rGCXHJcbiAgICBsZXQgcGFnZURhdGEgPSB7fVxyXG4gICAgaWYgKENvbXAuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgIHBhZ2VEYXRhID0gYXdhaXQgQ29tcC5nZXRJbml0aWFsUHJvcHMoY29udGV4dClcclxuICAgIH1cclxuICAgIC8v5aaC5p6c5a2Y5YKo5ZyoY2FjaGXph4zvvIzlsLHlj5bnvJPlrZjmlbDmja5cclxuICAgIGlmIChnZXQoZnVsbF9uYW1lKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcG9CYXNpYzogZ2V0KGZ1bGxfbmFtZSksXHJcbiAgICAgICAgLi4ucGFnZURhdGFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/oi6XkuI3lnKhjYWNoZemHjO+8jOWwsemHjeaWsOiOt+WPluaVsOaNru+8jOW5tuWwhuaVsOaNrue8k+WtmFxyXG4gICAgY29uc3QgcmVwb0Jhc2ljID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfWBcclxuICAgIH0sIGN0eC5yZXEsIGN0eC5yZXMpXHJcbiAgICAvL+WvueaVsOaNrue8k+WtmFxyXG4gICAgaWYgKCFpc1NlcnZlcikge1xyXG4gICAgICBjYWNoZShyZXBvQmFzaWMuZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXBvQmFzaWM6IHJlcG9CYXNpYy5kYXRhLFxyXG4gICAgICAuLi5wYWdlRGF0YVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gd2l0aFJvdXRlcihXaXRoRGV0YWlsKVxyXG59Il19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\components\\with-repo-basic.jsx */"));
  }

  WithDetail.getInitialProps = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
      var router, ctx, _ctx$query, owner, name, full_name, pageData, repoBasic;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              router = context.router, ctx = context.ctx;
              _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
              full_name = "".concat(owner, "/").concat(name); //可以调用公用布局之外其他组件的getInitialProps数据请求

              pageData = {};

              if (!Comp.getInitialProps) {
                _context.next = 8;
                break;
              }

              _context.next = 7;
              return Comp.getInitialProps(context);

            case 7:
              pageData = _context.sent;

            case 8:
              if (!Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["get"])(full_name)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                repoBasic: Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["get"])(full_name)
              }, pageData));

            case 10:
              _context.next = 12;
              return _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
                url: "/repos/".concat(owner, "/").concat(name)
              }, ctx.req, ctx.res);

            case 12:
              repoBasic = _context.sent;

              //对数据缓存
              if (!isServer) {
                Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["cache"])(repoBasic.data);
              }

              return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                repoBasic: repoBasic.data
              }, pageData));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(WithDetail);
});

/***/ })

})
//# sourceMappingURL=issues.js.67e44bf6f0008357983b.hot-update.js.map
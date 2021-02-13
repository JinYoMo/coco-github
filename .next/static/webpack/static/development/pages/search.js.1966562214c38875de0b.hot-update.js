webpackHotUpdate("static\\development\\pages\\search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_10__);










//栅格


 //搜索条件

var LANGUAGE = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java', 'Rust'];
var SORT_TYPES = [{
  name: 'Best Match'
}, {
  name: 'Most Stars',
  value: 'stars',
  order: 'desc'
}, {
  name: 'Fewest Stars',
  value: 'stars',
  order: 'asc'
}, {
  name: 'Most Forks',
  value: 'forks',
  order: 'desc'
}, {
  name: 'Fewest Forks',
  value: 'forks',
  order: 'asc'
}];
/**
 * sort：排序方式
 * order：排序顺序（升/降序）
 * lang：仓库的项目开发主语言
 * page：分页页面
 */

var selectedItemStyle = {
  borderLeft: '2px solid #e36209',
  fontWeight: 100
};
var FilterLink = Object(react__WEBPACK_IMPORTED_MODULE_7__["memo"])(function (_ref) {
  var name = _ref.name,
      query = _ref.query,
      lang = _ref.lang,
      sort = _ref.sort,
      order = _ref.order;
  var queryString = "?query=".concat(query);
  if (lang) queryString += "&lang=".concat(lang);
  if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || 'desc');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/search".concat(queryString)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, name));
});

function Search(_ref2) {
  var router = _ref2.router,
      repos = _ref2.repos;
  console.log(repos); // const {sort,order,lang,query}=router.query

  var querys = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, router.query);

  var _router$query = router.query,
      sort = _router$query.sort,
      order = _router$query.order,
      lang = _router$query.lang;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-954025538" + " " + "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 20
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "jsx-954025538" + " " + "list-header"
    }, "\u8BED\u8A00"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGE,
    renderItem: function renderItem(item) {
      var selected = lang === item;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-954025538"
      }, item) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "jsx-954025538" + " " + "list-header"
    }, "\u6392\u5E8F"),
    dataSource: SORT_TYPES,
    renderItem: function renderItem(item) {
      var selected = false;

      if (item.name === 'Best Match' && !sort) {
        selected = true;
      } else if (item.value === sort && item.order === order) {
        selected = true;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-954025538"
      }, item.name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, querys, {
        sort: item.value,
        order: item.order,
        name: item.name
      })));
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "954025538"
  }, ".root.jsx-954025538{padding:20px 0;}.list-header.jsx-954025538{font-weight:800;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdrQixBQUd5QixBQUdDLGVBRmpCLENBR2dCLGVBQ2hCIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLG1lbW99IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge1JvdyxDb2wsTGlzdH0gZnJvbSAnYW50ZCcgIC8v5qCF5qC8XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuXHJcbi8v5pCc57Si5p2h5Lu2XHJcbmNvbnN0IExBTkdVQUdFPVsnSmF2YVNjcmlwdCcsJ0hUTUwnLCdDU1MnLCdUeXBlU2NyaXB0JywnSmF2YScsJ1J1c3QnXVxyXG5jb25zdCBTT1JUX1RZUEVTPVtcclxuICB7XHJcbiAgICBuYW1lOidCZXN0IE1hdGNoJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTonTW9zdCBTdGFycycsXHJcbiAgICB2YWx1ZTonc3RhcnMnLFxyXG4gICAgb3JkZXI6J2Rlc2MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOidGZXdlc3QgU3RhcnMnLFxyXG4gICAgdmFsdWU6J3N0YXJzJyxcclxuICAgIG9yZGVyOidhc2MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOidNb3N0IEZvcmtzJyxcclxuICAgIHZhbHVlOidmb3JrcycsXHJcbiAgICBvcmRlcjonZGVzYydcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6J0Zld2VzdCBGb3JrcycsXHJcbiAgICB2YWx1ZTonZm9ya3MnLFxyXG4gICAgb3JkZXI6J2FzYydcclxuICB9LFxyXG5dXHJcblxyXG4vKipcclxuICogc29ydO+8muaOkuW6j+aWueW8j1xyXG4gKiBvcmRlcu+8muaOkuW6j+mhuuW6j++8iOWNhy/pmY3luo/vvIlcclxuICogbGFuZ++8muS7k+W6k+eahOmhueebruW8gOWPkeS4u+ivreiogFxyXG4gKiBwYWdl77ya5YiG6aG16aG16Z2iXHJcbiAqL1xyXG5cclxuIGNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlPXtcclxuICAgYm9yZGVyTGVmdDonMnB4IHNvbGlkICNlMzYyMDknLFxyXG4gICBmb250V2VpZ2h0OjEwMFxyXG4gfVxyXG5cclxuIGNvbnN0IEZpbHRlckxpbms9bWVtbygoe25hbWUscXVlcnksbGFuZyxzb3J0LG9yZGVyfSk9PntcclxuICAgIGxldCBxdWVyeVN0cmluZz1gP3F1ZXJ5PSR7cXVlcnl9YFxyXG4gICAgaWYobGFuZykgcXVlcnlTdHJpbmcrPWAmbGFuZz0ke2xhbmd9YFxyXG4gICAgaWYoc29ydCkgcXVlcnlTdHJpbmcrPWAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXJ8fCdkZXNjJ31gXHJcblxyXG4gICAgcmV0dXJuIDxMaW5rIGhyZWY9e2Avc2VhcmNoJHtxdWVyeVN0cmluZ31gfT48YT57bmFtZX08L2E+PC9MaW5rPlxyXG4gfSlcclxuZnVuY3Rpb24gU2VhcmNoKHtyb3V0ZXIscmVwb3N9KXtcclxuICBjb25zb2xlLmxvZyhyZXBvcylcclxuICBcclxuICAvLyBjb25zdCB7c29ydCxvcmRlcixsYW5nLHF1ZXJ5fT1yb3V0ZXIucXVlcnlcclxuICBjb25zdCB7Li4ucXVlcnlzfT1yb3V0ZXIucXVlcnlcclxuICBjb25zdCB7c29ydCxvcmRlcixsYW5nfT1yb3V0ZXIucXVlcnlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgPENvbCBzcGFuPXs2fT5cclxuICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+6K+t6KiAPC9zcGFuPn1cclxuICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOjIwfX1cclxuICAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFfVxyXG4gICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbT0+e1xyXG4gICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZD1sYW5nPT09aXRlbVxyXG4gICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkP3NlbGVjdGVkSXRlbVN0eWxlOm51bGx9PlxyXG4gICAgICAgICAgICAgICAgICAge3NlbGVjdGVkPzxzcGFuPntpdGVtfTwvc3Bhbj46PEZpbHRlckxpbmsgey4uLnF1ZXJ5c30gbGFuZz17aXRlbX0gbmFtZT17aXRlbX0vPn1cclxuICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+5o6S5bqPPC9zcGFuPn1cclxuICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XHJcbiAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtPT57XHJcbiAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZD1mYWxzZVxyXG4gICAgICAgICAgICAgICBpZihpdGVtLm5hbWU9PT0nQmVzdCBNYXRjaCcmJiFzb3J0KXtcclxuICAgICAgICAgICAgICAgICBzZWxlY3RlZD10cnVlXHJcbiAgICAgICAgICAgICAgIH1lbHNlIGlmKGl0ZW0udmFsdWU9PT1zb3J0JiZpdGVtLm9yZGVyPT09b3JkZXIpe1xyXG4gICAgICAgICAgICAgICAgIHNlbGVjdGVkPXRydWVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQ/c2VsZWN0ZWRJdGVtU3R5bGU6bnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZD88c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj46PEZpbHRlckxpbmsgey4uLnF1ZXJ5c30gc29ydD17aXRlbS52YWx1ZX0gb3JkZXI9e2l0ZW0ub3JkZXJ9IG5hbWU9e2l0ZW0ubmFtZX0vPn1cclxuICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290e1xyXG4gICAgICAgICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWhlYWRlcntcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OjgwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbiAgXHJcbn1cclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHM9YXN5bmMgKHtjdHh9KT0+e1xyXG4gIGNvbnN0IHtxdWVyeSxzb3J0LG9yZGVyLGxhbmcscGFnZX09Y3R4LnF1ZXJ5O1xyXG4gIGlmKCFxdWVyeSl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXBvczp7XHJcbiAgICAgICAgdG90YWxfY291bnQ6MFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vP3E9cmVhY3QrbGFuZ3VhZ2U6amF2YXNjcmlwdCZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmcGFnZT0yXHJcbiAgbGV0IHF1ZXJ5U3RyaW5nPWA/cT0ke3F1ZXJ5fWBcclxuICBpZihsYW5nKSBxdWVyeVN0cmluZys9YCtsYW5ndWFnZToke2xhbmd9YFxyXG4gIGlmKHNvcnQpIHF1ZXJ5U3RyaW5nKz1gJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyfHwnZGVzYyd9YFxyXG4gIGlmKHBhZ2UpIHF1ZXJ5U3RyaW5nKz1gJnBhZ2U9JHtwYWdlfWBcclxuICAvL+iwg+eUqOaQnOe0ouWIl+ihqOaOpeWPo1xyXG4gIGNvbnN0IHJlc3VsdD1hd2FpdCBhcGkucmVxdWVzdCh7XHJcbiAgICB1cmw6YC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gXHJcbiAgfSxjdHgucmVxLGN0eC5yZXMpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczpyZXN1bHQuZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpIl19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\search.js */"));
}

Search.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var ctx, _ctx$query, query, sort, order, lang, page, queryString, result;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, order = _ctx$query.order, lang = _ctx$query.lang, page = _ctx$query.page;

            if (query) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 4:
            //?q=react+language:javascript&sort=stars&order=desc&page=2
            queryString = "?q=".concat(query);
            if (lang) queryString += "+language:".concat(lang);
            if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || 'desc');
            if (page) queryString += "&page=".concat(page); //调用搜索列表接口

            _context.next = 10;
            return _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 10:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Search));

/***/ })

})
//# sourceMappingURL=search.js.1966562214c38875de0b.hot-update.js.map
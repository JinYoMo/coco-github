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

var FilterLink = function FilterLink(_ref) {
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
};

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
    style: {
      marginBottom: 20
    },
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
  }, ".root.jsx-954025538{padding:20px 0;}.list-header.jsx-954025538{font-weight:800;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0drQixBQUd5QixBQUdDLGVBRmpCLENBR2dCLGVBQ2hCIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtSb3csQ29sLExpc3R9IGZyb20gJ2FudGQnICAvL+agheagvFxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2xpYi9hcGknXHJcblxyXG4vL+aQnOe0ouadoeS7tlxyXG5jb25zdCBMQU5HVUFHRT1bJ0phdmFTY3JpcHQnLCdIVE1MJywnQ1NTJywnVHlwZVNjcmlwdCcsJ0phdmEnLCdSdXN0J11cclxuY29uc3QgU09SVF9UWVBFUz1bXHJcbiAge1xyXG4gICAgbmFtZTonQmVzdCBNYXRjaCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6J01vc3QgU3RhcnMnLFxyXG4gICAgdmFsdWU6J3N0YXJzJyxcclxuICAgIG9yZGVyOidkZXNjJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTonRmV3ZXN0IFN0YXJzJyxcclxuICAgIHZhbHVlOidzdGFycycsXHJcbiAgICBvcmRlcjonYXNjJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTonTW9zdCBGb3JrcycsXHJcbiAgICB2YWx1ZTonZm9ya3MnLFxyXG4gICAgb3JkZXI6J2Rlc2MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOidGZXdlc3QgRm9ya3MnLFxyXG4gICAgdmFsdWU6J2ZvcmtzJyxcclxuICAgIG9yZGVyOidhc2MnXHJcbiAgfSxcclxuXVxyXG5cclxuLyoqXHJcbiAqIHNvcnTvvJrmjpLluo/mlrnlvI9cclxuICogb3JkZXLvvJrmjpLluo/pobrluo/vvIjljYcv6ZmN5bqP77yJXHJcbiAqIGxhbmfvvJrku5PlupPnmoTpobnnm67lvIDlj5HkuLvor63oqIBcclxuICogcGFnZe+8muWIhumhtemhtemdolxyXG4gKi9cclxuXHJcbiBjb25zdCBzZWxlY3RlZEl0ZW1TdHlsZT17XHJcbiAgIGJvcmRlckxlZnQ6JzJweCBzb2xpZCAjZTM2MjA5JyxcclxuICAgZm9udFdlaWdodDoxMDBcclxuIH1cclxuXHJcbiBjb25zdCBGaWx0ZXJMaW5rPSh7bmFtZSxxdWVyeSxsYW5nLHNvcnQsb3JkZXJ9KT0+e1xyXG4gICAgbGV0IHF1ZXJ5U3RyaW5nPWA/cXVlcnk9JHtxdWVyeX1gXHJcbiAgICBpZihsYW5nKSBxdWVyeVN0cmluZys9YCZsYW5nPSR7bGFuZ31gXHJcbiAgICBpZihzb3J0KSBxdWVyeVN0cmluZys9YCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlcnx8J2Rlc2MnfWBcclxuXHJcbiAgICByZXR1cm4gPExpbmsgaHJlZj17YC9zZWFyY2gke3F1ZXJ5U3RyaW5nfWB9PjxhPntuYW1lfTwvYT48L0xpbms+XHJcbiB9XHJcbmZ1bmN0aW9uIFNlYXJjaCh7cm91dGVyLHJlcG9zfSl7XHJcbiAgY29uc29sZS5sb2cocmVwb3MpXHJcbiAgXHJcbiAgLy8gY29uc3Qge3NvcnQsb3JkZXIsbGFuZyxxdWVyeX09cm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qgey4uLnF1ZXJ5c309cm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3NvcnQsb3JkZXIsbGFuZ309cm91dGVyLnF1ZXJ5XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17MjB9PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17Nn0+XHJcbiAgICAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuivreiogDwvc3Bhbj59XHJcbiAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbToyMH19XHJcbiAgICAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRX1cclxuICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW09PntcclxuICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQ9bGFuZz09PWl0ZW1cclxuICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZD9zZWxlY3RlZEl0ZW1TdHlsZTpudWxsfT5cclxuICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZD88c3Bhbj57aXRlbX08L3NwYW4+OjxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IGxhbmc9e2l0ZW19IG5hbWU9e2l0ZW19Lz59XHJcbiAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QgXHJcbiAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuaOkuW6jzwvc3Bhbj59XHJcbiAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbToyMH19XHJcbiAgICAgICAgICAgICBkYXRhU291cmNlPXtTT1JUX1RZUEVTfVxyXG4gICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbT0+e1xyXG4gICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQ9ZmFsc2VcclxuICAgICAgICAgICAgICAgaWYoaXRlbS5uYW1lPT09J0Jlc3QgTWF0Y2gnJiYhc29ydCl7XHJcbiAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICB9ZWxzZSBpZihpdGVtLnZhbHVlPT09c29ydCYmaXRlbS5vcmRlcj09PW9yZGVyKXtcclxuICAgICAgICAgICAgICAgICBzZWxlY3RlZD10cnVlXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkP3NlbGVjdGVkSXRlbVN0eWxlOm51bGx9PlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQ/PHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+OjxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IHNvcnQ9e2l0ZW0udmFsdWV9IG9yZGVyPXtpdGVtLm9yZGVyfSBuYW1lPXtpdGVtLm5hbWV9Lz59XHJcbiAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdHtcclxuICAgICAgICAgIHBhZGRpbmc6MjBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC1oZWFkZXJ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDo4MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG4gIFxyXG59XHJcblxyXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4fSk9PntcclxuICBjb25zdCB7cXVlcnksc29ydCxvcmRlcixsYW5nLHBhZ2V9PWN0eC5xdWVyeTtcclxuICBpZighcXVlcnkpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVwb3M6e1xyXG4gICAgICAgIHRvdGFsX2NvdW50OjBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLz9xPXJlYWN0K2xhbmd1YWdlOmphdmFzY3JpcHQmc29ydD1zdGFycyZvcmRlcj1kZXNjJnBhZ2U9MlxyXG4gIGxldCBxdWVyeVN0cmluZz1gP3E9JHtxdWVyeX1gXHJcbiAgaWYobGFuZykgcXVlcnlTdHJpbmcrPWArbGFuZ3VhZ2U6JHtsYW5nfWBcclxuICBpZihzb3J0KSBxdWVyeVN0cmluZys9YCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlcnx8J2Rlc2MnfWBcclxuICBpZihwYWdlKSBxdWVyeVN0cmluZys9YCZwYWdlPSR7cGFnZX1gXHJcbiAgLy/osIPnlKjmkJzntKLliJfooajmjqXlj6NcclxuICBjb25zdCByZXN1bHQ9YXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgdXJsOmAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YFxyXG4gIH0sY3R4LnJlcSxjdHgucmVzKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVwb3M6cmVzdWx0LmRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKSJdfQ== */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\search.js */"));
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
//# sourceMappingURL=search.js.f1a54d2bcd4e4e9b26d2.hot-update.js.map
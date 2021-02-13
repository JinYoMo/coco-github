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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_9__);









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
  // const doSearch=() => {
  //   Router.push({
  //     pathname:'/search',
  //     query:{
  //       query,lang,sort,order
  //     }
  //   })
  // }
  var queryString = "?query=".concat(query);
  if (lang) queryString += "&lang=".concat(lang); // if(sort) queryString+=`&sort=${sort}&order=${order||'desc'}`

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/search".concat(queryString)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, name));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 20
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "list-header"
    }, "\u8BED\u8A00"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGE,
    renderItem: function renderItem(item) {
      var selected = lang === item;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bordered: true,
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "list-header"
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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, querys, {
        sort: item.value,
        order: item.order,
        name: item.name
      })));
    }
  }))));
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
            return _lib_api__WEBPACK_IMPORTED_MODULE_9___default.a.request({
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

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Search));

/***/ })

})
//# sourceMappingURL=search.js.5000c87bd98b81598515.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\detail\\issues.js",{

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);











function IssueItem(_ref) {
  var issue = _ref.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      showDetail = _useState2[0],
      setShowDetail = _useState2[1];

  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2198506698" + " " + "issue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      right: 10,
      top: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? '隐藏' : '查看'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2198506698" + " " + "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2198506698" + " " + "main-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
    className: "jsx-2198506698"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2198506698"
  }, issue.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2198506698" + " " + "sub-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2198506698"
  }, "Updated at ", issue.updated_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2198506698"
  }, ".issue.jsx-2198506698{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-2198506698:hover{background:#fafafa;}.issue.jsx-2198506698+.issue.jsx-2198506698{border-top:1px solid #eee;}.main-info.jsx-2198506698>h6.jsx-2198506698{max-width:600px;font-size:16px;padding-right:40px;}.avatar.jsx-2198506698{margin-right:20px;}.sub-info.jsx-2198506698{margin-bottom:0;}.sub-info.jsx-2198506698>span.jsx-2198506698+span.jsx-2198506698{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tCLEFBRzBCLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdLLGdCQVZOLEFBUWpCLEVBSEEsQ0FYQSxFQWlCbUIsS0FkbkIsS0FJcUIsT0FXSixZQVZqQixHQVdBLHFCQXhCb0Isa0JBQ0wsYUFDZiIsImZpbGUiOiJFOlxc5Liq5Lq66aG555uuXFxnaXRIdWLpobnnm65cXGNvY28tZ2l0aHViXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtBdmF0YXIsQnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuXHJcbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KXtcclxuICBjb25zdCBbc2hvd0RldGFpbCxzZXRTaG93RGV0YWlsXT11c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbD11c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWw9PiFkZXRhaWwpXHJcbiAgfSxbXSlcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIiBcclxuICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJyxyaWdodDoxMCx0b3A6MTB9fVxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICAgID57c2hvd0RldGFpbD8n6ZqQ6JePJzon5p+l55yLJ308L0J1dHRvbj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9IC8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgIDxoNj5cclxuICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICA8L2g2PlxyXG4gICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2lzc3VlLnVwZGF0ZWRfYXR9PC9zcGFuPlxyXG4gICAgICAgICA8L3A+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuZnVuY3Rpb24gSXNzdWVzICh7aXNzdWVzfSl7XHJcbiAgY29uc29sZS5sb2coaXNzdWVzKVxyXG4gIHJldHVybiAoXHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxyXG4gICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZT0+PElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9IC8+KX1cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcz1hc3luYyh7Y3R4fSk9PntcclxuICBjb25zdCB7b3duZXIsbmFtZX09Y3R4LnF1ZXJ5XHJcblxyXG4gIGNvbnN0IGlzc3Vlc1JlcG9zPWF3YWl0IGFwaS5yZXF1ZXN0KHtcclxuICAgIHVybDpgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxyXG4gIH0sY3R4LnJlcSxjdHgucmVzKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNzdWVzOmlzc3Vlc1JlcG9zLmRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZXBvQmFzaWMoSXNzdWVzLCdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\detail\\issues.js */"));
}

function Issues(_ref2) {
  var issues = _ref2.issues;
  console.log(issues);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2212480553" + " " + "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2212480553" + " " + "issues"
  }, issues.map(function (issue) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IssueItem, {
      issue: issue,
      key: issue.id
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2212480553"
  }, ".issues.jsx-2212480553{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-2212480553{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-2212480553{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RW1CLEFBR2lDLEFBTVQsQUFHQSxhQUNBLFNBVEssa0JBQ0MsbUJBQ0gsZUFJbEIsQ0FIQSxZQU9xQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiRTpcXOS4quS6uumhueebrlxcZ2l0SHVi6aG555uuXFxjb2NvLWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QXZhdGFyLEJ1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHdpdGhSZXBvQmFzaWMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMnXHJcblxyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2xpYi9hcGknXHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSl7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsc2V0U2hvd0RldGFpbF09dXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWw9dXNlQ2FsbGJhY2soKCk9PntcclxuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsPT4hZGV0YWlsKVxyXG4gIH0sW10pXHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cclxuICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiIFxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCIgXHJcbiAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOidhYnNvbHV0ZScscmlnaHQ6MTAsdG9wOjEwfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XHJcbiAgICAgICAgICA+e3Nob3dEZXRhaWw/J+makOiXjyc6J+afpeeciyd9PC9CdXR0b24+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgPC9oNj5cclxuICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtpc3N1ZS51cGRhdGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICAgPC9wPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcbmZ1bmN0aW9uIElzc3VlcyAoe2lzc3Vlc30pe1xyXG4gIGNvbnNvbGUubG9nKGlzc3VlcylcclxuICByZXR1cm4gKFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWU9PjxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfSAvPil9XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaXNzdWVzIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHM9YXN5bmMoe2N0eH0pPT57XHJcbiAgY29uc3Qge293bmVyLG5hbWV9PWN0eC5xdWVyeVxyXG5cclxuICBjb25zdCBpc3N1ZXNSZXBvcz1hd2FpdCBhcGkucmVxdWVzdCh7XHJcbiAgICB1cmw6YC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcclxuICB9LGN0eC5yZXEsY3R4LnJlcylcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzc3Vlczppc3N1ZXNSZXBvcy5kYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwb0Jhc2ljKElzc3VlcywnaXNzdWVzJykiXX0= */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\detail\\issues.js */"));
}

Issues.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var ctx, _ctx$query, owner, name, issuesRepos;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 4;
            return _lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res);

          case 4:
            issuesRepos = _context.sent;
            return _context.abrupt("return", {
              issues: issuesRepos.data
            });

          case 6:
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_7__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.0b7eb8e2d8b0bb9bf010.hot-update.js.map
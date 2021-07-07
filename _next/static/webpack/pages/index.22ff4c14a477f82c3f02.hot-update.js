self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/External/External.js":
/*!*********************************************!*\
  !*** ./src/components/External/External.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShadowTitle": function() { return /* binding */ ShadowTitle; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/social */ "./src/constants/social.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kaliz/dev/tantranlee/bitcoinsn/src/components/External/External.js",
    _this = undefined;



var ShadowTitle = function ShadowTitle(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mb-16 overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "select-none uppercase text-[40px] lg:text-[70px] text-gray-600 font-bold text-opacity-5 text-center",
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-center text-white font-bold text-4xl capitalize -mt-8 lg:-mt-16",
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};
_c = ShadowTitle;

var SocialItem = function SocialItem(_ref2) {
  var name = _ref2.name,
      link = _ref2.link,
      Icon = _ref2.Icon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: link,
    target: "_blank",
    className: "px-4 py-4 rounded-lg bg-blueGray-800 bg-opacity-30 group transition-all",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-4 py-4 rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-16 h-16 rounded-full bg-primary bg-opacity-10 mx-auto mb-4 flex items-center justify-center text-primary text-opacity-70 group-hover:text-opacity-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
          className: "w-8 h-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center text-gray-300 font-bold",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_c2 = SocialItem;

var External = function External() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-dark py-16",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ShadowTitle, {
        text: "Follow Us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-24",
        children: _constants_social__WEBPACK_IMPORTED_MODULE_1__.default.map(function (val, key) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocialItem, {
            name: val.name,
            Icon: val.icon,
            link: val.href
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_c3 = External;
/* harmony default export */ __webpack_exports__["default"] = (External);

var _c, _c2, _c3;

$RefreshReg$(_c, "ShadowTitle");
$RefreshReg$(_c2, "SocialItem");
$RefreshReg$(_c3, "External");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXh0ZXJuYWwvRXh0ZXJuYWwuanMiXSwibmFtZXMiOlsiU2hhZG93VGl0bGUiLCJ0ZXh0IiwiU29jaWFsSXRlbSIsIm5hbWUiLCJsaW5rIiwiSWNvbiIsIkV4dGVybmFsIiwiU09DSUFMUyIsInZhbCIsImtleSIsImljb24iLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxxR0FBZjtBQUFBLGdCQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLHNFQUFmO0FBQUEsZ0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYTTtLQUFNRCxXOztBQVliLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQTBCO0FBQUEsTUFBdkJDLElBQXVCLFNBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDM0Msc0JBQ0U7QUFDRSxRQUFJLEVBQUVELElBRFI7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLGFBQVMsRUFBQyx5RUFIWjtBQUFBLDJCQUtFO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlKQUFmO0FBQUEsK0JBQ0UsOERBQUMsSUFBRDtBQUFNLG1CQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBQyxxQ0FBZjtBQUFBLGtCQUFzREQ7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZkQ7O01BQU1ELFU7O0FBaUJOLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsOEJBQ0UsOERBQUMsV0FBRDtBQUFhLFlBQUksRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsaURBQWY7QUFBQSxrQkFDR0MsMERBQUEsQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN6Qiw4QkFDRSw4REFBQyxVQUFEO0FBRUUsZ0JBQUksRUFBRUQsR0FBRyxDQUFDTCxJQUZaO0FBR0UsZ0JBQUksRUFBRUssR0FBRyxDQUFDRSxJQUhaO0FBSUUsZ0JBQUksRUFBRUYsR0FBRyxDQUFDRztBQUpaLGFBQ09GLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVFELFNBVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcEJEOztNQUFNSCxRO0FBc0JOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyZmY0YzE0YTQ3N2Y4MmMzZjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYVR3aXR0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBTT0NJQUxTIGZyb20gXCIuLi8uLi9jb25zdGFudHMvc29jaWFsXCI7XG5leHBvcnQgY29uc3QgU2hhZG93VGl0bGUgPSAoeyB0ZXh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTE2IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Qtbm9uZSB1cHBlcmNhc2UgdGV4dC1bNDBweF0gbGc6dGV4dC1bNzBweF0gdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC1vcGFjaXR5LTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC00eGwgY2FwaXRhbGl6ZSAtbXQtOCBsZzotbXQtMTZcIj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBTb2NpYWxJdGVtID0gKHsgbmFtZSwgbGluaywgSWNvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e2xpbmt9XG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS00IHJvdW5kZWQtbGcgYmctYmx1ZUdyYXktODAwIGJnLW9wYWNpdHktMzAgZ3JvdXAgdHJhbnNpdGlvbi1hbGxcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgYmctb3BhY2l0eS0xMCBteC1hdXRvIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1wcmltYXJ5IHRleHQtb3BhY2l0eS03MCBncm91cC1ob3Zlcjp0ZXh0LW9wYWNpdHktMTAwXCI+XG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwidy04IGgtOFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS0zMDAgZm9udC1ib2xkXCI+e25hbWV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5jb25zdCBFeHRlcm5hbCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmsgcHktMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8U2hhZG93VGl0bGUgdGV4dD1cIkZvbGxvdyBVc1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBsZzpnYXAtMjRcIj5cbiAgICAgICAgICB7U09DSUFMUy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgIG5hbWU9e3ZhbC5uYW1lfVxuICAgICAgICAgICAgICAgIEljb249e3ZhbC5pY29ufVxuICAgICAgICAgICAgICAgIGxpbms9e3ZhbC5ocmVmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVybmFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
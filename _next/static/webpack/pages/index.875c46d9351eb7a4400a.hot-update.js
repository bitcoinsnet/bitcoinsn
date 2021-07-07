self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useAntiClone.js":
/*!***********************************!*\
  !*** ./src/hooks/useAntiClone.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();




var useAntiClone = function useAntiClone() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isFake = _useState[0],
      setFake = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (false) {}
  }, []);
  return [isFake];
};

_s(useAntiClone, "lmGZFzYJzj5XDLriuQWjmXI4Aqs=");

/* harmony default export */ __webpack_exports__["default"] = (useAntiClone);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUFudGlDbG9uZS5qcyJdLCJuYW1lcyI6WyJ1c2VBbnRpQ2xvbmUiLCJ1c2VTdGF0ZSIsImlzRmFrZSIsInNldEZha2UiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0NDLCtDQUFRLENBQUMsS0FBRCxDQURUO0FBQUEsTUFDbEJDLE1BRGtCO0FBQUEsTUFDVkMsT0FEVTs7QUFFekJDLGtEQUFTLENBQUMsWUFBTTtBQUNkLGVBQTBDLEVBT3pDO0FBQ0YsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVVBLFNBQU8sQ0FBQ0YsTUFBRCxDQUFQO0FBQ0QsQ0FiRDs7R0FBTUYsWTs7QUFlTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NzVjNDZkOTM1MWViN2E0NDAwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxuY29uc3QgdXNlQW50aUNsb25lID0gKCkgPT4ge1xuICBjb25zdCBbaXNGYWtlLCBzZXRGYWtlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgV2ViMy51dGlscy5zaGEzKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkgIT1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSEFTSFxuICAgICAgKSB7XG4gICAgICAgIHNldEZha2UodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiBbaXNGYWtlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFudGlDbG9uZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
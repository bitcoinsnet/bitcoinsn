self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Nav/MobileButton.js":
/*!********************************************!*\
  !*** ./src/components/Nav/MobileButton.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNav */ "./src/components/Nav/TopNav.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/kaliz/dev/tantranlee/bitcoinsn/src/components/Nav/MobileButton.js",
    _this = undefined,
    _s = $RefreshSig$();




var button1Variants = {
  show: {
    rotate: -45
  },
  hide: {
    rotate: 0
  }
};
var button2Variants = {
  show: {
    rotate: 45
  },
  hide: {
    rotate: 0
  }
};
var button3Variants = {
  show: {
    opacity: 0
  },
  hide: {
    opacity: 1
  }
};

var MobileButton = function MobileButton() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  var handleOnClick = function handleOnClick() {
    setShow(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: function onClick() {
        return setShow(!show);
      },
      className: "fixed px-2 py-2 top-0 right-0 mt-8 mr-4 lg:hidden",
      style: {
        zIndex: 10000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button1Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-primary to-blue-800  transform origin-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button3Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-primary to-blue-800 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button2Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-primary to-red-600 transform origin-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fixed inset-0 z-50 px-4 py-4 flex items-center justify-center bg-bg flex-wrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: {
          y: 0
        },
        initial: {
          y: 30
        },
        className: "",
        onClick: handleOnClick,
        children: _TopNav__WEBPACK_IMPORTED_MODULE_2__.menus.map(function (val, key) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#".concat(val.toLowerCase()),
            className: "text-gray-300 block text-xl px-4 py-2 text-center mb-4 last:mb-0 border border-primary rounded-full",
            children: val
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(MobileButton, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");

_c = MobileButton;
/* harmony default export */ __webpack_exports__["default"] = (MobileButton);

var _c;

$RefreshReg$(_c, "MobileButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L01vYmlsZUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJidXR0b24xVmFyaWFudHMiLCJzaG93Iiwicm90YXRlIiwiaGlkZSIsImJ1dHRvbjJWYXJpYW50cyIsImJ1dHRvbjNWYXJpYW50cyIsIm9wYWNpdHkiLCJNb2JpbGVCdXR0b24iLCJ1c2VTdGF0ZSIsInNldFNob3ciLCJoYW5kbGVPbkNsaWNrIiwiekluZGV4IiwieSIsIm1lbnVzIiwidmFsIiwia2V5IiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxDQUFDO0FBREwsR0FEZ0I7QUFJdEJDLE1BQUksRUFBRTtBQUNKRCxVQUFNLEVBQUU7QUFESjtBQUpnQixDQUF4QjtBQVFBLElBQU1FLGVBQWUsR0FBRztBQUN0QkgsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRTtBQURKLEdBRGdCO0FBSXRCQyxNQUFJLEVBQUU7QUFDSkQsVUFBTSxFQUFFO0FBREo7QUFKZ0IsQ0FBeEI7QUFRQSxJQUFNRyxlQUFlLEdBQUc7QUFDdEJKLE1BQUksRUFBRTtBQUNKSyxXQUFPLEVBQUU7QUFETCxHQURnQjtBQUl0QkgsTUFBSSxFQUFFO0FBQ0pHLFdBQU8sRUFBRTtBQURMO0FBSmdCLENBQXhCOztBQVFBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUNsQlAsSUFEa0I7QUFBQSxNQUNaUSxPQURZOztBQUV6QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJELFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUFNQSxPQUFPLENBQUMsQ0FBQ1IsSUFBRixDQUFiO0FBQUEsT0FEWDtBQUVFLGVBQVMsRUFBQyxtREFGWjtBQUdFLFdBQUssRUFBRTtBQUFFVSxjQUFNLEVBQUU7QUFBVixPQUhUO0FBQUEsOEJBS0UsOERBQUMscURBQUQ7QUFDRSxlQUFPLEVBQUVWLElBQUksR0FBRyxNQUFILEdBQVksTUFEM0I7QUFFRSxnQkFBUSxFQUFFRCxlQUZaO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQVVFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFQyxJQUFJLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBRUUsZ0JBQVEsRUFBRUksZUFGWjtBQUdFLGlCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFlRSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRUosSUFBSSxHQUFHLE1BQUgsR0FBWSxNQUQzQjtBQUVFLGdCQUFRLEVBQUVHLGVBRlo7QUFHRSxpQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBc0JHSCxJQUFJLGlCQUNIO0FBQ0UsZUFBUyxpRkFEWDtBQUFBLDZCQUdFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQ1BXLFdBQUMsRUFBRTtBQURJLFNBRFg7QUFJRSxlQUFPLEVBQUU7QUFDUEEsV0FBQyxFQUFFO0FBREksU0FKWDtBQU9FLGlCQUFTLEVBQUMsRUFQWjtBQVFFLGVBQU8sRUFBRUYsYUFSWDtBQUFBLGtCQVVHRyw4Q0FBQSxDQUFVLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZCLDhCQUNFO0FBRUUsZ0JBQUksYUFBTUQsR0FBRyxDQUFDRSxXQUFKLEVBQU4sQ0FGTjtBQUdFLHFCQUFTLHVHQUhYO0FBQUEsc0JBS0dGO0FBTEgsYUFDT0MsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBU0QsU0FWQTtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJKO0FBQUEsa0JBREY7QUFxREQsQ0ExREQ7O0dBQU1SLFk7O0tBQUFBLFk7QUEyRE4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWFjNTRlZGQxY2RlOTY5ZmFiOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgbWVudXMgfSBmcm9tIFwiLi9Ub3BOYXZcIjtcbmNvbnN0IGJ1dHRvbjFWYXJpYW50cyA9IHtcbiAgc2hvdzoge1xuICAgIHJvdGF0ZTogLTQ1LFxuICB9LFxuICBoaWRlOiB7XG4gICAgcm90YXRlOiAwLFxuICB9LFxufTtcbmNvbnN0IGJ1dHRvbjJWYXJpYW50cyA9IHtcbiAgc2hvdzoge1xuICAgIHJvdGF0ZTogNDUsXG4gIH0sXG4gIGhpZGU6IHtcbiAgICByb3RhdGU6IDAsXG4gIH0sXG59O1xuY29uc3QgYnV0dG9uM1ZhcmlhbnRzID0ge1xuICBzaG93OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgfSxcbiAgaGlkZToge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuY29uc3QgTW9iaWxlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0U2hvdyhmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHB4LTIgcHktMiB0b3AtMCByaWdodC0wIG10LTggbXItNCBsZzpoaWRkZW5cIlxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDEwMDAwIH19XG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgYW5pbWF0ZT17c2hvdyA/IFwic2hvd1wiIDogXCJoaWRlXCJ9XG4gICAgICAgICAgdmFyaWFudHM9e2J1dHRvbjFWYXJpYW50c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIGgtMSB3LTYgcm91bmRlZCBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkgdG8tYmx1ZS04MDAgIHRyYW5zZm9ybSBvcmlnaW4tcmlnaHRcIlxuICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGFuaW1hdGU9e3Nob3cgPyBcInNob3dcIiA6IFwiaGlkZVwifVxuICAgICAgICAgIHZhcmlhbnRzPXtidXR0b24zVmFyaWFudHN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMSBoLTEgdy02IHJvdW5kZWQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5IHRvLWJsdWUtODAwIFwiXG4gICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgYW5pbWF0ZT17c2hvdyA/IFwic2hvd1wiIDogXCJoaWRlXCJ9XG4gICAgICAgICAgdmFyaWFudHM9e2J1dHRvbjJWYXJpYW50c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIGgtMSB3LTYgcm91bmRlZCBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkgdG8tcmVkLTYwMCB0cmFuc2Zvcm0gb3JpZ2luLXJpZ2h0XCJcbiAgICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3cgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgaW5zZXQtMCB6LTUwIHB4LTQgcHktNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1iZyBmbGV4LXdyYXBgfVxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgIHk6IDMwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51cy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3ZhbC50b0xvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWdyYXktMzAwIGJsb2NrIHRleHQteGwgcHgtNCBweS0yIHRleHQtY2VudGVyIG1iLTQgbGFzdDptYi0wIGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkLWZ1bGxgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt2YWx9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW9iaWxlQnV0dG9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
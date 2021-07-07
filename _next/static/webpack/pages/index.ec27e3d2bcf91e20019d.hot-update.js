self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Presale/Presale.js":
/*!*******************************************!*\
  !*** ./src/components/Presale/Presale.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _External_External__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../External/External */ "./src/components/External/External.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _hooks_useSale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSale */ "./src/hooks/useSale.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useRefer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useRefer */ "./src/hooks/useRefer.js");
/* harmony import */ var _hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useCopy */ "./src/hooks/useCopy.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_commonSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../slices/commonSlice */ "./src/slices/commonSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/bitcoinsn/src/components/Presale/Presale.js",
    _this = undefined,
    _s = $RefreshSig$();










var Presale = function Presale() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0.01),
      value = _useState[0],
      setValue = _useState[1];

  var _useRefer = (0,_hooks_useRefer__WEBPACK_IMPORTED_MODULE_7__.default)(),
      _useRefer2 = (0,_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useRefer, 1),
      refer = _useRefer2[0];

  var _useCopy = (0,_hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__.default)(),
      _useCopy2 = (0,_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCopy, 1),
      cp = _useCopy2[0];

  var web3 = (0,_hooks_useSale__WEBPACK_IMPORTED_MODULE_5__.default)();
  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_10__.accountSelector);

  var handleConnect = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return _home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return web3.onConnect();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleConnect() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClaim = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return _home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return web3.claimAirdrop(refer);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClaim() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSale = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return _home_kaliz_dev_tantranlee_bitcoinsn_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return web3.tokenSale(refer, value);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSale() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "py-16",
    id: "airdrop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_External_External__WEBPACK_IMPORTED_MODULE_4__.ShadowTitle, {
        text: "Bitcoinsn Presale"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-gray-300 font-bold text-xl mb-4",
            children: "Bitcoinsn Will be listed on Hotbit and pancakeswap exchange after Presale end."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-gray-300 text-sm mb-2",
              children: "Enter BNB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              className: "w-full px-4 py-2 rounded border border-blueGray-800 bg-transparent text-primary focus:border-primary focus:outline-none",
              value: value,
              onChange: function onChange(e) {
                return setValue(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mb-4 text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handleSale,
              className: "px-4 py-2 rounded-lg bg-primary text-white border border-primary border-opacity-100 hover:border-opacity-70 transition-all hover:bg-opacity-70",
              children: "Buy Token"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-center mb-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handleClaim,
              className: "px-4 py-2 rounded-lg border border-primary text-primary hover:border-white hover:text-white transition-all",
              children: "Claim Airdrop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-gray-400",
              children: ["(*) Rate Sale: 0.01 BNB = 800", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-primary font-bold",
                children: "Bitcoin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-white font-bold",
                children: "sn"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 66
              }, _this), "(*) Minium buy 0.01 BNB - 10 BNB", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this), "(*) Your friends who buy through your link receive 100% commission."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-gray-300 font-bold text-xl mb-4",
            children: "Refer your friends and claim bonus"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-gray-300 text-sm mb-2",
                children: "Your refer link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-8 h-8 cursor-pointer",
                onClick: function onClick() {
                  return cp("https://Bitcoinsntoken.net?address=".concat(account));
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_11__.IoIosCopy, {
                  className: "w-6 h-6 text-primary text-opacity-40 hover:text-opacity-100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-full px-4 py-2 rounded border border-blueGray-800 bg-transparent text-primary",
              children: account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "break-all",
                children: "https://Bitcoinsntoken.net?address=".concat(account)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "invisible",
                children: "0x0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mb-8 text-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: handleConnect,
              className: "px-4 py-2 rounded-lg bg-primary text-white border border-primary border-opacity-100 hover:border-opacity-70 transition-all hover:bg-opacity-70",
              children: "Get referral link"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-gray-400",
              children: ["(*) Referral friend claim 8", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-primary font-bold",
                children: "Bitcoin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-white font-bold",
                children: "sn"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this), "(*) You receive 8", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-primary font-bold",
                children: "Bitcoin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-white font-bold",
                children: "sn"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), "(*) Referral no limit bonus."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(Presale, "OLgbYtKDq1hkwzRDS2L2vm7Agzg=", false, function () {
  return [_hooks_useRefer__WEBPACK_IMPORTED_MODULE_7__.default, _hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useSale__WEBPACK_IMPORTED_MODULE_5__.default, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector];
});

_c = Presale;
/* harmony default export */ __webpack_exports__["default"] = (Presale);

var _c;

$RefreshReg$(_c, "Presale");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJlc2FsZS9QcmVzYWxlLmpzIl0sIm5hbWVzIjpbIlByZXNhbGUiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VSZWZlciIsInJlZmVyIiwidXNlQ29weSIsImNwIiwid2ViMyIsInVzZVNhbGUiLCJhY2NvdW50IiwidXNlU2VsZWN0b3IiLCJhY2NvdW50U2VsZWN0b3IiLCJoYW5kbGVDb25uZWN0Iiwib25Db25uZWN0IiwiaGFuZGxlQ2xhaW0iLCJjbGFpbUFpcmRyb3AiLCJoYW5kbGVTYWxlIiwidG9rZW5TYWxlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsK0NBQVEsQ0FBQyxJQUFELENBRGQ7QUFBQSxNQUNiQyxLQURhO0FBQUEsTUFDTkMsUUFETTs7QUFBQSxrQkFFSkMsd0RBQVEsRUFGSjtBQUFBO0FBQUEsTUFFYkMsS0FGYTs7QUFBQSxpQkFHUEMsdURBQU8sRUFIQTtBQUFBO0FBQUEsTUFHYkMsRUFIYTs7QUFJcEIsTUFBTUMsSUFBSSxHQUFHQyx1REFBTyxFQUFwQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVcsQ0FBQ0MsaUVBQUQsQ0FBM0I7O0FBQ0EsTUFBTUMsYUFBYTtBQUFBLCtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNkTCxJQUFJLENBQUNNLFNBQUwsRUFEYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiRCxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQUdBLE1BQU1FLFdBQVc7QUFBQSxnVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LHVCQU5GLGVBT0U7QUFBTSx5QkFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvR0QsQ0FuSEQ7O0dBQU1iLE87VUFFWUksb0QsRUFDSEUsbUQsRUFDQUcsbUQsRUFDR0Usb0Q7OztLQUxaWCxPO0FBb0hOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjMjdlM2QyYmNmOTFlMjAwMTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkb3dUaXRsZSB9IGZyb20gXCIuLi9FeHRlcm5hbC9FeHRlcm5hbFwiO1xuaW1wb3J0IHsgSW9Jb3NDb3B5IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgdXNlU2FsZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlU2FsZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VSZWZlciBmcm9tIFwiLi4vLi4vaG9va3MvdXNlUmVmZXJcIjtcbmltcG9ydCB1c2VDb3B5IGZyb20gXCIuLi8uLi9ob29rcy91c2VDb3B5XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWNjb3VudFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3NsaWNlcy9jb21tb25TbGljZVwiO1xuXG5jb25zdCBQcmVzYWxlID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDAuMDEpO1xuICBjb25zdCBbcmVmZXJdID0gdXNlUmVmZXIoKTtcbiAgY29uc3QgW2NwXSA9IHVzZUNvcHkoKTtcbiAgY29uc3Qgd2ViMyA9IHVzZVNhbGUoKTtcbiAgY29uc3QgYWNjb3VudCA9IHVzZVNlbGVjdG9yKGFjY291bnRTZWxlY3Rvcik7XG4gIGNvbnN0IGhhbmRsZUNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgd2ViMy5vbkNvbm5lY3QoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2xhaW0gPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgd2ViMy5jbGFpbUFpcmRyb3AocmVmZXIpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTYWxlID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdlYjMudG9rZW5TYWxlKHJlZmVyLCB2YWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNlwiIGlkPVwiYWlyZHJvcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxTaGFkb3dUaXRsZSB0ZXh0PVwiQml0Y29pbnNuIFByZXNhbGVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBmb250LWJvbGQgdGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICAgIEJpdGNvaW5zbiBXaWxsIGJlIGxpc3RlZCBvbiBIb3RiaXQgYW5kIHBhbmNha2Vzd2FwIGV4Y2hhbmdlIGFmdGVyXG4gICAgICAgICAgICAgIFByZXNhbGUgZW5kLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQtc20gbWItMlwiPkVudGVyIEJOQjwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiByb3VuZGVkIGJvcmRlciBib3JkZXItYmx1ZUdyYXktODAwIGJnLXRyYW5zcGFyZW50IHRleHQtcHJpbWFyeSBmb2N1czpib3JkZXItcHJpbWFyeSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTYWxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLWxnIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgYm9yZGVyLW9wYWNpdHktMTAwIGhvdmVyOmJvcmRlci1vcGFjaXR5LTcwIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLW9wYWNpdHktNzBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQnV5IFRva2VuXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsYWltfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgaG92ZXI6Ym9yZGVyLXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xhaW0gQWlyZHJvcFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgKCopIFJhdGUgU2FsZTogMC4wMSBCTkIgPSA4MDB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtYm9sZFwiPkJpdGNvaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGRcIj5zbjwvc3Bhbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgKCopIE1pbml1bSBidXkgMC4wMSBCTkIgLSAxMCBCTkJcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAoKikgWW91ciBmcmllbmRzIHdobyBidXkgdGhyb3VnaCB5b3VyIGxpbmsgcmVjZWl2ZSAxMDAlXG4gICAgICAgICAgICAgICAgY29tbWlzc2lvbi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGZvbnQtYm9sZCB0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgICAgUmVmZXIgeW91ciBmcmllbmRzIGFuZCBjbGFpbSBib251c1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgdGV4dC1zbSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIHJlZmVyIGxpbmtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIGNwKGBodHRwczovL0JpdGNvaW5zbnRva2VuLm5ldD9hZGRyZXNzPSR7YWNjb3VudH1gKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJb0lvc0NvcHkgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LXByaW1hcnkgdGV4dC1vcGFjaXR5LTQwIGhvdmVyOnRleHQtb3BhY2l0eS0xMDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ibHVlR3JheS04MDAgYmctdHJhbnNwYXJlbnQgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAge2FjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFrLWFsbFwiPntgaHR0cHM6Ly9CaXRjb2luc250b2tlbi5uZXQ/YWRkcmVzcz0ke2FjY291bnR9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZpc2libGVcIj4weDA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLWxnIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgYm9yZGVyLW9wYWNpdHktMTAwIGhvdmVyOmJvcmRlci1vcGFjaXR5LTcwIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLW9wYWNpdHktNzBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgR2V0IHJlZmVycmFsIGxpbmtcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgKCopIFJlZmVycmFsIGZyaWVuZCBjbGFpbSA4e1wiIFwifVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LWJvbGRcIj5CaXRjb2luPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+c248L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgKCopIFlvdSByZWNlaXZlIDh7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZvbnQtYm9sZFwiPkJpdGNvaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGRcIj5zbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAoKikgUmVmZXJyYWwgbm8gbGltaXQgYm9udXMuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJlc2FsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
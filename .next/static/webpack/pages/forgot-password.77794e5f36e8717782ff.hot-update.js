webpackHotUpdate_N_E("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Common/Breadcrumb */ "./components/Common/Breadcrumb.js");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../redux/actions/auth */ "./redux/actions/auth.js");









var _jsxFileName = "D:\\Gamegram\\ecommerce-master\\pages\\forgot-password.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var Schema = yup__WEBPACK_IMPORTED_MODULE_15__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required('Enter your email or mobile phone number.'),
  password: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required('Enter your password.')
});

var Forgotpassword = /*#__PURE__*/function (_Component) {
  Object(D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Forgotpassword, _Component);

  var _super = _createSuper(Forgotpassword);

  function Forgotpassword(props) {
    var _this;

    Object(D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Forgotpassword);

    _this = _super.call(this, props);

    Object(D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onFinish", function (values) {
      _this.props.userLogin(values);
    });

    _this.state = {};
    return _this;
  }

  Object(D_Gamegram_ecommerce_master_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Forgotpassword, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("Forgotpassword", this.props);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_18__["default"], {
          title: "Forgotpassword"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "signup-area ptb-60",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "signup-content",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "section-title",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "dot"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 33
                  }, this), " Forgotpassword"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_14__["Formik"], {
                validationSchema: LoginSchema,
                onSubmit: function onSubmit(values) {
                  _this2.onFinish(values);
                },
                enableReinitialize: true,
                initialValues: {
                  email: ''
                },
                children: function children(_ref) {
                  var handleSubmit = _ref.handleSubmit,
                      handleChange = _ref.handleChange,
                      values = _ref.values,
                      touched = _ref.touched,
                      errors = _ref.errors;
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
                    noValidate: true,
                    onSubmit: handleSubmit,
                    className: "login-form",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Row, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
                          children: "Email or Mobile phone number"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 91,
                          columnNumber: 57
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
                          type: "text",
                          required: true,
                          name: "email",
                          value: values.email,
                          onChange: handleChange,
                          isInvalid: !!errors.email
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 92,
                          columnNumber: 57
                        }, _this2), errors.email && touched.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control.Feedback, {
                          type: "invalid",
                          children: errors.email
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 101,
                          columnNumber: 61
                        }, _this2) : null]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 53
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 49
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 45
                  }, _this2);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }, this)]
      }, void 0, true);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if (nextProps.auth) {
        if (nextProps.auth.messageId === 200) {
          antd__WEBPACK_IMPORTED_MODULE_10__["notification"]['success']({
            message: 'Success',
            description: nextProps.auth.alertMessage
          });
          nextProps.resetUserAuth();
        } else if (nextProps.auth.messageId === 203) {
          antd__WEBPACK_IMPORTED_MODULE_10__["notification"]['error']({
            message: 'There was a problem!',
            description: nextProps.auth.alertMessage
          });
          nextProps.resetUserAuth();
        }

        return true;
      }

      return null;
    }
  }]);

  return Forgotpassword;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispathToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])({
    userLogin: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_19__["userLogin"],
    resetUserAuth: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_19__["resetUserAuth"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispathToProps)(Forgotpassword));

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIll1cCIsInNoYXBlIiwiZW1haWwiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwiRm9yZ290cGFzc3dvcmQiLCJwcm9wcyIsInZhbHVlcyIsInVzZXJMb2dpbiIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIkxvZ2luU2NoZW1hIiwib25GaW5pc2giLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibmV4dFByb3BzIiwiYXV0aCIsIm1lc3NhZ2VJZCIsIm5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsImFsZXJ0TWVzc2FnZSIsInJlc2V0VXNlckF1dGgiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBLElBQU1BLE1BQU0sR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUM5QkMsT0FBSyxFQUFFRiwyQ0FBQSxHQUFhRyxRQUFiLENBQXNCLDBDQUF0QixDQUR1QjtBQUU5QkMsVUFBUSxFQUFFSiwyQ0FBQSxHQUFhRyxRQUFiLENBQXNCLHNCQUF0QjtBQUZvQixDQUFuQixDQUFmOztJQUtNRSxjOzs7OztBQUNGLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsdVVBT1IsVUFBQUMsTUFBTSxFQUFJO0FBQ2pCLFlBQUtELEtBQUwsQ0FBV0UsU0FBWCxDQUFxQkQsTUFBckI7QUFDSCxLQVRrQjs7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NERBQVksQ0FBQyxTQUFELENBQVosQ0FBd0I7QUFDdEJDLG1CQUFPLEVBQUUsU0FEYTtBQUV0QkMsdUJBQVcsRUFBRUwsU0FBUyxDQUFDQyxJQUFWLENBQWVLO0FBRk4sV0FBeEI7QUFJQU4sbUJBQVMsQ0FBQ08sYUFBVjtBQUNELFNBTkQsTUFNTyxJQUFHUCxTQUFTLENBQUNDLElBQVYsQ0FBZUMsU0FBZixLQUE2QixHQUFoQyxFQUFvQztBQUN6Q0MsNERBQVksQ0FBQyxPQUFELENBQVosQ0FBc0I7QUFDcEJDLG1CQUFPLEVBQUUsc0JBRFc7QUFFcEJDLHVCQUFXLEVBQUVMLFNBQVMsQ0FBQ0MsSUFBVixDQUFlSztBQUZSLFdBQXRCO0FBSUFOLG1CQUFTLENBQUNPLGFBQVY7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7OztFQTlCd0JDLCtDOztBQStGN0IsU0FBU0MsZUFBVCxDQUF5QmxCLEtBQXpCLEVBQWdDO0FBQzVCLFNBQU87QUFDSFUsUUFBSSxFQUFFVixLQUFLLENBQUNVO0FBRFQsR0FBUDtBQUdIOztBQUVELFNBQVNTLGlCQUFULENBQTJCQyxRQUEzQixFQUFxQztBQUNqQyxTQUFPQyxpRUFBa0IsQ0FBQztBQUFFdEIsYUFBUyxFQUFUQSw4REFBRjtBQUFhaUIsaUJBQWEsRUFBYkEsa0VBQWFBO0FBQTFCLEdBQUQsRUFBK0JJLFFBQS9CLENBQXpCO0FBQ0g7O0FBRWNFLDJIQUFPLENBQUNKLGVBQUQsRUFBa0JDLGlCQUFsQixDQUFQLENBQTRDdkIsY0FBNUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuNzc3OTRlNWYzNmU4NzE3NzgyZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtub3RpZmljYXRpb259IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBGb3JtLCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXInO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYic7XG5cbmltcG9ydCB7XG4gICAgdXNlckxvZ2luLFxuICAgIHJlc2V0VXNlckF1dGhcbn0gZnJvbSBcIi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoXCI7XG5cbmNvbnN0IFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRW50ZXIgeW91ciBlbWFpbCBvciBtb2JpbGUgcGhvbmUgbnVtYmVyLicpLFxuICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ0VudGVyIHlvdXIgcGFzc3dvcmQuJylcbn0pO1xuXG5jbGFzcyBGb3Jnb3RwYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpbmlzaCA9IHZhbHVlcyA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMudXNlckxvZ2luKHZhbHVlcyk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBzdGF0ZSl7XG4gICAgICAgIGlmKG5leHRQcm9wcy5hdXRoKXtcbiAgICAgICAgICBpZihuZXh0UHJvcHMuYXV0aC5tZXNzYWdlSWQgPT09IDIwMCl7XG4gICAgICAgICAgICBub3RpZmljYXRpb25bJ3N1Y2Nlc3MnXSh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG5leHRQcm9wcy5hdXRoLmFsZXJ0TWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXh0UHJvcHMucmVzZXRVc2VyQXV0aCgpO1xuICAgICAgICAgIH0gZWxzZSBpZihuZXh0UHJvcHMuYXV0aC5tZXNzYWdlSWQgPT09IDIwMyl7XG4gICAgICAgICAgICBub3RpZmljYXRpb25bJ2Vycm9yJ10oe1xuICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlcmUgd2FzIGEgcHJvYmxlbSEnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbmV4dFByb3BzLmF1dGguYWxlcnRNZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5leHRQcm9wcy5yZXNldFVzZXJBdXRoKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3Jnb3RwYXNzd29yZFwiLCB0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9XCJGb3Jnb3RwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2lnbnVwLWFyZWEgcHRiLTYwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gRm9yZ290cGFzc3dvcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtMb2dpblNjaGVtYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpbmlzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBvciBNb2JpbGUgcGhvbmUgbnVtYmVyPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXshIWVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPntlcnJvcnMuZW1haWx9PC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyB1c2VyTG9naW4sIHJlc2V0VXNlckF1dGggfSwgZGlzcGF0Y2gpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0aFRvUHJvcHMpKEZvcmdvdHBhc3N3b3JkKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
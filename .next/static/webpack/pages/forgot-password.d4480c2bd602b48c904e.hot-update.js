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













var ForgotpasswordSchema = yup__WEBPACK_IMPORTED_MODULE_15__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required('Enter your email or mobile phone number.')
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
                validationSchema: ForgotpasswordSchema,
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
                        }, _this2) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 53
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          type: "submit",
                          className: "btn btn-primary",
                          children: "Forgotpassword"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 34
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 34
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                          href: "/ change-password",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "return-store",
                            children: "Reset password"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 40
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 40
                        }, _this2)]
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
          lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIkZvcmdvdHBhc3N3b3JkU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwiRm9yZ290cGFzc3dvcmQiLCJwcm9wcyIsInZhbHVlcyIsInVzZXJMb2dpbiIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsIm5leHRQcm9wcyIsImF1dGgiLCJtZXNzYWdlSWQiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJhbGVydE1lc3NhZ2UiLCJyZXNldFVzZXJBdXRoIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0aFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQSxJQUFNQSxvQkFBb0IsR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUM1Q0MsT0FBSyxFQUFFRiwyQ0FBQSxHQUFhRyxRQUFiLENBQXNCLDBDQUF0QjtBQURxQyxDQUFuQixDQUE3Qjs7SUFLTUMsYzs7Ozs7QUFDRiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHVVQU9SLFVBQUFDLE1BQU0sRUFBSTtBQUNqQixZQUFLRCxLQUFMLENBQVdFLFNBQVgsQ0FBcUJELE1BQXJCO0FBQ0gsS0FUa0I7O0FBR2YsVUFBS0UsS0FBTCxHQUFhLEVBQWI7QUFIZTtBQUtsQjs7Ozs2QkEwQlE7QUFBQTs7QUFDTEMsYUFB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QUE1QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5kNDQ4MGMyYmQ2MDJiNDhjOTA0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtub3RpZmljYXRpb259IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IEZvcm0sIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcblxyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyJztcclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgdXNlckxvZ2luLFxyXG4gICAgcmVzZXRVc2VyQXV0aFxyXG59IGZyb20gXCIuLy4uL3JlZHV4L2FjdGlvbnMvYXV0aFwiO1xyXG5cclxuY29uc3QgRm9yZ290cGFzc3dvcmRTY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRW50ZXIgeW91ciBlbWFpbCBvciBtb2JpbGUgcGhvbmUgbnVtYmVyLicpLFxyXG4gICAgXHJcbn0pO1xyXG5cclxuY2xhc3MgRm9yZ290cGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRmluaXNoID0gdmFsdWVzID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnVzZXJMb2dpbih2YWx1ZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgc3RhdGUpe1xyXG4gICAgICAgIGlmKG5leHRQcm9wcy5hdXRoKXtcclxuICAgICAgICAgIGlmKG5leHRQcm9wcy5hdXRoLm1lc3NhZ2VJZCA9PT0gMjAwKXtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uWydzdWNjZXNzJ10oe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbmV4dFByb3BzLmF1dGguYWxlcnRNZXNzYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuZXh0UHJvcHMucmVzZXRVc2VyQXV0aCgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmKG5leHRQcm9wcy5hdXRoLm1lc3NhZ2VJZCA9PT0gMjAzKXtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uWydlcnJvciddKHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlcmUgd2FzIGEgcHJvYmxlbSEnLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZXh0UHJvcHMuYXV0aC5hbGVydE1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5yZXNldFVzZXJBdXRoKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9yZ290cGFzc3dvcmRcIiwgdGhpcy5wcm9wcyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYiB0aXRsZT1cIkZvcmdvdHBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZ251cC1hcmVhIHB0Yi02MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gRm9yZ290cGFzc3dvcmQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17Rm9yZ290cGFzc3dvcmRTY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmluaXNoKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBvciBNb2JpbGUgcGhvbmUgbnVtYmVyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9eyEhZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+e2Vycm9ycy5lbWFpbH08L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Gb3Jnb3RwYXNzd29yZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8gY2hhbmdlLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJldHVybi1zdG9yZVwiPlJlc2V0IHBhc3N3b3JkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGhcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0aFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyB1c2VyTG9naW4sIHJlc2V0VXNlckF1dGggfSwgZGlzcGF0Y2gpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0aFRvUHJvcHMpKEZvcmdvdHBhc3N3b3JkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
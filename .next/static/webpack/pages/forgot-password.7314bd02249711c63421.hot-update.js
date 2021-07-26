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
                        }, _this2) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          type: "submit",
                          className: "btn btn-primary",
                          children: "Forgotpassword"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 34
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                          href: "/",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "return-store",
                            children: "or Return to Signup"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 105,
                            columnNumber: 33
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 29
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIkZvcmdvdHBhc3N3b3JkU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwiRm9yZ290cGFzc3dvcmQiLCJwcm9wcyIsInZhbHVlcyIsInVzZXJMb2dpbiIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsIm5leHRQcm9wcyIsImF1dGgiLCJtZXNzYWdlSWQiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJhbGVydE1lc3NhZ2UiLCJyZXNldFVzZXJBdXRoIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0aFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQSxJQUFNQSxvQkFBb0IsR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUM1Q0MsT0FBSyxFQUFFRiwyQ0FBQSxHQUFhRyxRQUFiLENBQXNCLDBDQUF0QjtBQURxQyxDQUFuQixDQUE3Qjs7SUFLTUMsYzs7Ozs7QUFDRiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHVVQU9SLFVBQUFDLE1BQU0sRUFBSTtBQUNqQixZQUFLRCxLQUFMLENBQVdFLFNBQVgsQ0FBcUJELE1BQXJCO0FBQ0gsS0FUa0I7O0FBR2YsVUFBS0UsS0FBTCxHQUFhLEVBQWI7QUFIZTtBQUtsQjs7Ozs2QkEwQlE7QUFBQTs7QUFDTEMsYUFB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NDk3MTFjNjM0MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtub3RpZmljYXRpb259IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBGb3JtLCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXInO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYic7XG5cbmltcG9ydCB7XG4gICAgdXNlckxvZ2luLFxuICAgIHJlc2V0VXNlckF1dGhcbn0gZnJvbSBcIi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoXCI7XG5cbmNvbnN0IEZvcmdvdHBhc3N3b3JkU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdFbnRlciB5b3VyIGVtYWlsIG9yIG1vYmlsZSBwaG9uZSBudW1iZXIuJyksXG4gICAgXG59KTtcblxuY2xhc3MgRm9yZ290cGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GaW5pc2ggPSB2YWx1ZXMgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnVzZXJMb2dpbih2YWx1ZXMpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgc3RhdGUpe1xuICAgICAgICBpZihuZXh0UHJvcHMuYXV0aCl7XG4gICAgICAgICAgaWYobmV4dFByb3BzLmF1dGgubWVzc2FnZUlkID09PSAyMDApe1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uWydzdWNjZXNzJ10oe1xuICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZXh0UHJvcHMuYXV0aC5hbGVydE1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV4dFByb3BzLnJlc2V0VXNlckF1dGgoKTtcbiAgICAgICAgICB9IGVsc2UgaWYobmV4dFByb3BzLmF1dGgubWVzc2FnZUlkID09PSAyMDMpe1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uWydlcnJvciddKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZXJlIHdhcyBhIHByb2JsZW0hJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG5leHRQcm9wcy5hdXRoLmFsZXJ0TWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXh0UHJvcHMucmVzZXRVc2VyQXV0aCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9yZ290cGFzc3dvcmRcIiwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHRpdGxlPVwiRm9yZ290cGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZ251cC1hcmVhIHB0Yi02MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IEZvcmdvdHBhc3N3b3JkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17Rm9yZ290cGFzc3dvcmRTY2hlbWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3ZhbHVlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GaW5pc2godmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWwgb3IgTW9iaWxlIHBob25lIG51bWJlcjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj57ZXJyb3JzLmVtYWlsfTwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkZvcmdvdHBhc3N3b3JkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmV0dXJuLXN0b3JlXCI+b3IgUmV0dXJuIHRvIFNpZ251cDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aFxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0aFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgdXNlckxvZ2luLCByZXNldFVzZXJBdXRoIH0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGhUb1Byb3BzKShGb3Jnb3RwYXNzd29yZCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
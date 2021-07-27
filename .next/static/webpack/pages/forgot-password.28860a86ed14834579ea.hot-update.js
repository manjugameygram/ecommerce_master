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
                          href: "/",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "return-store",
                            children: "Reset"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIkZvcmdvdHBhc3N3b3JkU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwiRm9yZ290cGFzc3dvcmQiLCJwcm9wcyIsInZhbHVlcyIsInVzZXJMb2dpbiIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsIm5leHRQcm9wcyIsImF1dGgiLCJtZXNzYWdlSWQiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJhbGVydE1lc3NhZ2UiLCJyZXNldFVzZXJBdXRoIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0aFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQSxJQUFNQSxvQkFBb0IsR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUM1Q0MsT0FBSyxFQUFFRiwyQ0FBQSxHQUFhRyxRQUFiLENBQXNCLDBDQUF0QjtBQURxQyxDQUFuQixDQUE3Qjs7SUFLTUMsYzs7Ozs7QUFDRiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHVVQU9SLFVBQUFDLE1BQU0sRUFBSTtBQUNqQixZQUFLRCxLQUFMLENBQVdFLFNBQVgsQ0FBcUJELE1BQXJCO0FBQ0gsS0FUa0I7O0FBR2YsVUFBS0UsS0FBTCxHQUFhLEVBQWI7QUFIZTtBQUtsQjs7Ozs2QkEwQlE7QUFBQTs7QUFDTEMsYUFB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QTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9yZ290LXBhc3N3b3JkLjI4ODYwYTg2ZWQxNDgzNDU3OWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge25vdGlmaWNhdGlvbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRm9ybSwgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXInO1xyXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9CcmVhZGNydW1iJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICB1c2VyTG9naW4sXHJcbiAgICByZXNldFVzZXJBdXRoXHJcbn0gZnJvbSBcIi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoXCI7XHJcblxyXG5jb25zdCBGb3Jnb3RwYXNzd29yZFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBlbWFpbDogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdFbnRlciB5b3VyIGVtYWlsIG9yIG1vYmlsZSBwaG9uZSBudW1iZXIuJyksXHJcbiAgICBcclxufSk7XHJcblxyXG5jbGFzcyBGb3Jnb3RwYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25GaW5pc2ggPSB2YWx1ZXMgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMudXNlckxvZ2luKHZhbHVlcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBzdGF0ZSl7XHJcbiAgICAgICAgaWYobmV4dFByb3BzLmF1dGgpe1xyXG4gICAgICAgICAgaWYobmV4dFByb3BzLmF1dGgubWVzc2FnZUlkID09PSAyMDApe1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25bJ3N1Y2Nlc3MnXSh7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZXh0UHJvcHMuYXV0aC5hbGVydE1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5yZXNldFVzZXJBdXRoKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYobmV4dFByb3BzLmF1dGgubWVzc2FnZUlkID09PSAyMDMpe1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25bJ2Vycm9yJ10oe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIScsXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG5leHRQcm9wcy5hdXRoLmFsZXJ0TWVzc2FnZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV4dFByb3BzLnJlc2V0VXNlckF1dGgoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3Jnb3RwYXNzd29yZFwiLCB0aGlzLnByb3BzKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHRpdGxlPVwiRm9yZ290cGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2lnbnVwLWFyZWEgcHRiLTYwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBGb3Jnb3RwYXNzd29yZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtGb3Jnb3RwYXNzd29yZFNjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GaW5pc2godmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIG9yIE1vYmlsZSBwaG9uZSBudW1iZXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj57ZXJyb3JzLmVtYWlsfTwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkZvcmdvdHBhc3N3b3JkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXR1cm4tc3RvcmVcIj5SZXNldDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoOiBzdGF0ZS5hdXRoXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGhUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgdXNlckxvZ2luLCByZXNldFVzZXJBdXRoIH0sIGRpc3BhdGNoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGhUb1Byb3BzKShGb3Jnb3RwYXNzd29yZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
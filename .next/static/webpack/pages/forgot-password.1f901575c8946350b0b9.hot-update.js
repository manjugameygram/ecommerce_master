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
                          placeholder: "Enter ",
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
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
                          href: "/",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            className: "return-store",
                            children: "or Return to Signup"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 106,
                            columnNumber: 40
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
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
          lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290LXBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbIkZvcmdvdHBhc3N3b3JkU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwiRm9yZ290cGFzc3dvcmQiLCJwcm9wcyIsInZhbHVlcyIsInVzZXJMb2dpbiIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidG91Y2hlZCIsImVycm9ycyIsIm5leHRQcm9wcyIsImF1dGgiLCJtZXNzYWdlSWQiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJhbGVydE1lc3NhZ2UiLCJyZXNldFVzZXJBdXRoIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0aFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQSxJQUFNQSxvQkFBb0IsR0FBR0MsMkNBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUM1Q0MsT0FBSyxFQUFFRiwyQ0FBQSxHQUFhRyxRQUFiLENBQXNCLDBDQUF0QjtBQURxQyxDQUFuQixDQUE3Qjs7SUFLTUMsYzs7Ozs7QUFDRiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHVVQU9SLFVBQUFDLE1BQU0sRUFBSTtBQUNqQixZQUFLRCxLQUFMLENBQVdFLFNBQVgsQ0FBcUJELE1BQXJCO0FBQ0gsS0FUa0I7O0FBR2YsVUFBS0UsS0FBTCxHQUFhLEVBQWI7QUFIZTtBQUtsQjs7Ozs2QkEwQlE7QUFBQTs7QUFDTEMsYUFB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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9yZ290LXBhc3N3b3JkLjFmOTAxNTc1Yzg5NDYzNTBiMGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7bm90aWZpY2F0aW9ufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRm9ybSwgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyJztcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0JyZWFkY3J1bWInO1xuXG5pbXBvcnQge1xuICAgIHVzZXJMb2dpbixcbiAgICByZXNldFVzZXJBdXRoXG59IGZyb20gXCIuLy4uL3JlZHV4L2FjdGlvbnMvYXV0aFwiO1xuXG5jb25zdCBGb3Jnb3RwYXNzd29yZFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRW50ZXIgeW91ciBlbWFpbCBvciBtb2JpbGUgcGhvbmUgbnVtYmVyLicpLFxuICAgIFxufSk7XG5cbmNsYXNzIEZvcmdvdHBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRmluaXNoID0gdmFsdWVzID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyTG9naW4odmFsdWVzKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHN0YXRlKXtcbiAgICAgICAgaWYobmV4dFByb3BzLmF1dGgpe1xuICAgICAgICAgIGlmKG5leHRQcm9wcy5hdXRoLm1lc3NhZ2VJZCA9PT0gMjAwKXtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblsnc3VjY2VzcyddKHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbmV4dFByb3BzLmF1dGguYWxlcnRNZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5leHRQcm9wcy5yZXNldFVzZXJBdXRoKCk7XG4gICAgICAgICAgfSBlbHNlIGlmKG5leHRQcm9wcy5hdXRoLm1lc3NhZ2VJZCA9PT0gMjAzKXtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblsnZXJyb3InXSh7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIScsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZXh0UHJvcHMuYXV0aC5hbGVydE1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV4dFByb3BzLnJlc2V0VXNlckF1dGgoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZvcmdvdHBhc3N3b3JkXCIsIHRoaXMucHJvcHMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYiB0aXRsZT1cIkZvcmdvdHBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWdudXAtYXJlYSBwdGItNjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+PC9zcGFuPiBGb3Jnb3RwYXNzd29yZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e0ZvcmdvdHBhc3N3b3JkU2NoZW1hfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmluaXNoKHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIG9yIE1vYmlsZSBwaG9uZSBudW1iZXI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkVudGVyIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ISFlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj57ZXJyb3JzLmVtYWlsfTwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkZvcmdvdHBhc3N3b3JkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmV0dXJuLXN0b3JlXCI+b3IgUmV0dXJuIHRvIFNpZ251cDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aDogc3RhdGUuYXV0aFxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0aFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgdXNlckxvZ2luLCByZXNldFVzZXJBdXRoIH0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGhUb1Byb3BzKShGb3Jnb3RwYXNzd29yZCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
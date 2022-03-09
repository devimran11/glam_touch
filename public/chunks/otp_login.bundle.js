(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp_login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/otp.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/otp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.isLoading = false;
    }, 1000);
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_2__["Form"]({
        mobile_no: ""
      }),
      isLoading: true,
      fullPage: true,
      disabled: true,
      sendMode: true,
      second_limit: 60,
      verify_code: "",
      span_message: "Mobile No",
      heading: "LOGIN WITH MOBILE NUMBER"
    };
  },
  methods: {
    sendOtp: function sendOtp() {
      var _this2 = this;

      this.isLoading = true;
      this.form.post("/send/otp").then(function (resp) {
        console.log(resp);

        if (resp.data) {
          _this2.isLoading = false;
          _this2.sendMode = false;

          _this2.$toasted.show(resp.data, {
            type: "success",
            position: "bottom-center",
            duration: 5000
          });

          _this2.$refs.verify_code;
          _this2.span_message = "PLEASE ENTER 4 DIGITS VERIFICATION CODE";
          _this2.heading = "Verify 4 Digits Code";
          _this2.second_limit = 60;

          _this2.timeDicrementor();
        } else {
          _this2.$toasted.show("something went to wrong", {
            type: "error",
            position: "bottom-center",
            duration: 5000
          });
        }
      })["catch"](function (error) {
        _this2.isLoading = false;

        _this2.$toasted.show("something went to wrong", {
          type: "error",
          position: "bottom-center",
          duration: 2000
        });
      });
    },
    timeDicrementor: function timeDicrementor() {
      var _this3 = this;

      setInterval(function () {
        _this3.second_limit -= 1;
      }, 1000);
    },
    verifyOtp: function verifyOtp() {
      var _this4 = this;

      this.isLoading = true;
      axios.get("/verify/otp/code", {
        params: {
          mobile_no: this.form.mobile_no,
          verify_code: this.verify_code
        }
      }).then(function (resp) {
        _this4.isLoading = false;

        if (resp.data.status == "OK") {
          _this4.$toasted.show(resp.data.message, {
            type: "success",
            position: "bottom-center",
            duration: 4000
          });

          localStorage.setItem("user_token", resp.data.user.mobile_no);

          _this4.$router.push({
            name: "Chekout"
          });
        } else {
          _this4.$toasted.show(resp.data, {
            type: "error",
            position: "bottom-center",
            duration: 4000
          });
        }
      })["catch"](function (e) {
        _this4.isLoading = false;
      });
    }
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a,
    HasError: vform__WEBPACK_IMPORTED_MODULE_2__["HasError"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/otp.vue?vue&type=template&id=98710ee0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/public/otp.vue?vue&type=template&id=98710ee0& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper-wide" },
    [
      _c("loading", {
        attrs: {
          active: _vm.isLoading,
          "can-cancel": true,
          "is-full-page": _vm.fullPage
        },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      }),
      _vm._v(" "),
      _c("frontend-header"),
      _vm._v(" "),
      _c("div", { attrs: { id: "container" } }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { attrs: { id: "content" } }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-3 col-xs-0" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-sm-12 col-xs-12 col-lg-5",
                    attrs: { id: "content" }
                  },
                  [
                    _c("div", { staticClass: "custom-box" }, [
                      _c(
                        "h3",
                        {
                          staticStyle: {
                            "font-family": "poppins,margin-bottom: 2px",
                            "border-bottom": "none",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.heading))]
                      ),
                      _vm._v(" "),
                      _c("span", {
                        staticStyle: {
                          "margin-left": "40px",
                          "margin-top": "2px"
                        }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.sendMode
                        ? _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.sendOtp($event)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _vm._m(0),
                                  _vm._v(" "),
                                  _c("label", [
                                    _vm._v(_vm._s(_vm.span_message))
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.mobile_no,
                                        expression: "form.mobile_no"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "mobile_no"
                                      )
                                    },
                                    attrs: {
                                      autofocus: "",
                                      type: "text",
                                      name: "mobile_no",
                                      autocomplete: "off",
                                      maxlength: "11",
                                      placeholder: "01xxx-xxxxxx"
                                    },
                                    domProps: { value: _vm.form.mobile_no },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "mobile_no",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "mobile_no"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-block btn-primary",
                                  attrs: {
                                    type: "submit",
                                    disabled:
                                      _vm.form.busy ||
                                      _vm.form.mobile_no.length != 11
                                  }
                                },
                                [
                                  _vm.form.busy
                                    ? _c("i", {
                                        staticClass: "fa fa-spinner fa-spin"
                                      })
                                    : _vm._e(),
                                  _vm._v("SEND CODE\n                  ")
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _vm._m(1),
                              _vm._v(" "),
                              _vm._m(2),
                              _vm._v(" "),
                              _vm._m(3),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass: "login_with_password_btn",
                                  attrs: { to: { name: "UserLogin" } }
                                },
                                [_vm._v("Login with password")]
                              )
                            ],
                            1
                          )
                        : _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.verifyOtp($event)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.verify_code,
                                        expression: "verify_code"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "verify_code"
                                      )
                                    },
                                    attrs: {
                                      type: "text",
                                      name: "verify_code",
                                      autocomplete: "off",
                                      placeholder: "Enter Code"
                                    },
                                    domProps: { value: _vm.verify_code },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.verify_code = $event.target.value
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "verify_code"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group text-center" },
                                [
                                  _vm.second_limit > 0
                                    ? _c("h4", [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(_vm.second_limit) +
                                            " "
                                        ),
                                        _c("i", {
                                          staticClass: "fa fa-clock-o"
                                        })
                                      ])
                                    : _c(
                                        "button",
                                        {
                                          staticClass: "btn  btn-primary",
                                          staticStyle: {
                                            "margin-bottom": "10px",
                                            border: "none !important"
                                          },
                                          attrs: { type: "submit" },
                                          on: { click: _vm.sendOtp }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    Resend OTP\n                  "
                                          )
                                        ]
                                      ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-block btn-primary",
                                      attrs: {
                                        type: "submit",
                                        disabled: _vm.verify_code.length < 4
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                    VERIFY\n                  "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("br")
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("frontend-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-8" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-5 col-sm-5 col-xs-5" }, [_c("hr")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-2 col-sm-2 col-xs-2" }, [
        _c("h4", [_vm._v("OR ")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-5 col-sm-5 col-xs-5" }, [_c("hr")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "socail_login_container" }, [
        _c(
          "a",
          {
            staticClass: "btn facebook_btn",
            attrs: { href: "/login/facebook" }
          },
          [_c("i", { staticClass: "fa fa-facebook" }), _vm._v(" facebook")]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "btn google_btn", attrs: { href: "/login/google" } },
          [_c("i", { staticClass: "fa fa-google" }), _vm._v(" Google")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-5 col-sm-5 col-xs-5" }, [_c("hr")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-2 col-sm-2 col-xs-2" }, [_c("h4")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-5 col-sm-5 col-xs-5" }, [_c("hr")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/public/otp.vue":
/*!************************************************!*\
  !*** ./resources/js/components/public/otp.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _otp_vue_vue_type_template_id_98710ee0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.vue?vue&type=template&id=98710ee0& */ "./resources/js/components/public/otp.vue?vue&type=template&id=98710ee0&");
/* harmony import */ var _otp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.vue?vue&type=script&lang=js& */ "./resources/js/components/public/otp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _otp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _otp_vue_vue_type_template_id_98710ee0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _otp_vue_vue_type_template_id_98710ee0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/public/otp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/public/otp.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/public/otp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_otp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./otp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/otp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_otp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/public/otp.vue?vue&type=template&id=98710ee0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/public/otp.vue?vue&type=template&id=98710ee0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_otp_vue_vue_type_template_id_98710ee0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./otp.vue?vue&type=template&id=98710ee0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/public/otp.vue?vue&type=template&id=98710ee0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_otp_vue_vue_type_template_id_98710ee0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_otp_vue_vue_type_template_id_98710ee0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banner"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/banner/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/banner/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    this.banner();
  },
  data: function data() {
    return {
      banners: '',
      loading: true,
      search: '',
      basePath: this.$store.state.image_base_link
    };
  },
  methods: {
    banner: function banner() {
      var _this = this;

      axios.get('/api/banner/list').then(function (resp) {
        if (resp.data.status == 'OK') {
          _this.banners = resp.data.banners;
          _this.loading = false;
        } else {
          _this.$toasted.show('something  went to wrong', {
            type: "error",
            position: 'top-center',
            duration: 5000
          });
        }
      });
    },
    active: function active(banner) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You want active this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/api/banner/item/active/' + banner.id).then(function (resp) {
            if (resp.data.status == 'OK') {
              _this2.banner();

              _this2.$toasted.show(resp.data.message, {
                position: 'top-center',
                type: 'success',
                duration: 4000
              });
            } else {
              _this2.$toasted.show('something  went to wrong', {
                position: 'top-center',
                type: 'error',
                duration: 4000
              });
            }
          });
        } else {
          _this2.$toasted.show('Ok ! no action here', {
            position: 'top-center',
            type: 'info',
            duration: 3000
          });
        }
      });
    },
    deActive: function deActive(banner) {
      var _this3 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You want de-active this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/api/banner/item/de-active/' + banner.id).then(function (resp) {
            if (resp.data.status == 'OK') {
              _this3.banner();

              _this3.$toasted.show(resp.data.message, {
                position: 'top-center',
                type: 'success',
                duration: 4000
              });
            } else {
              _this3.$toasted.show('something  went to wrong', {
                position: 'top-center',
                type: 'error',
                duration: 4000
              });
            }
          })["catch"](function (error) {
            _this3.$toasted.show('something  went to wrong', {
              position: 'top-center',
              type: 'error',
              duration: 4000
            });
          });
        } else {
          _this3.$toasted.show('Ok ! no action here', {
            position: 'top-center',
            type: 'info',
            duration: 3000
          });
        }
      });
    },
    destroy: function destroy(banner) {
      var _this4 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "Delete this banner!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/api/banner/item/delete/' + banner.id).then(function (resp) {
            //console.log(resp)
            if (resp.data.status == 'OK') {
              _this4.banner();

              _this4.$toasted.show(resp.data.message, {
                position: 'top-center',
                type: 'success',
                duration: 4000
              });
            } else {
              _this4.$toasted.show('something  went to wrong', {
                position: 'top-center',
                type: 'error',
                duration: 4000
              });
            }
          })["catch"](function (error) {
            console.log(error);

            _this4.$toasted.show('something  went to wrong', {
              position: 'top-center',
              type: 'error',
              duration: 4000
            });
          });
        } else {
          _this4.$toasted.show('Ok ! no action here', {
            position: 'top-center',
            type: 'info',
            duration: 3000
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/banner/Index.vue?vue&type=template&id=27941e4c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/banner/Index.vue?vue&type=template&id=27941e4c& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    [
      _c("admin-main"),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [
        _c("section", { staticClass: "content-header" }, [
          _c(
            "h1",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: { to: { name: "banner_add" } }
                },
                [_c("i", { staticClass: "fa fa-plus" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row " }, [
              _c("div", { staticClass: "col-lg-11" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table text-center table-brodered table-hover table-striped"
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm.loading
                              ? _c("h1", [
                                  _c("i", {
                                    staticClass: "fa fa-spin fa-spinner"
                                  })
                                ])
                              : _vm._l(_vm.banners, function(banner, index) {
                                  return _c("tr", { key: index }, [
                                    _c("td", { attrs: { scope: "row" } }, [
                                      _vm._v(_vm._s(index + 1))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("img", {
                                        staticStyle: { width: "100px" },
                                        attrs: {
                                          src: _vm.basePath + banner.banner,
                                          alt: "banner Image"
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " + _vm._s(banner.placement) + " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      banner.status == 1
                                        ? _c("span", { staticClass: "badge" }, [
                                            _vm._v("Active")
                                          ])
                                        : _c("span", { staticClass: "badge" }, [
                                            _vm._v("De-active")
                                          ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-success",
                                            attrs: {
                                              to: {
                                                name: "banner_edit",
                                                params: { id: banner.id }
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-edit"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-danger",
                                            on: {
                                              click: function($event) {
                                                return _vm.destroy(banner)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-trash"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        banner.status == 1
                                          ? _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-warning",
                                                attrs: { title: "De-active" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.deActive(banner)
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-ban"
                                                })
                                              ]
                                            )
                                          : _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary",
                                                attrs: { title: "active" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.active(banner)
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-check"
                                                })
                                              ]
                                            )
                                      ],
                                      1
                                    )
                                  ])
                                })
                          ],
                          2
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb" }, [
      _c("li", [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "fa fa-dashboard" }),
          _vm._v("Dashboard")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("banner")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border text-center" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v(" Banners ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Banner Placement")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/banner/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/banner/Index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_27941e4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=27941e4c& */ "./resources/js/components/admin/banner/Index.vue?vue&type=template&id=27941e4c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/banner/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_27941e4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_27941e4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/banner/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/banner/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/banner/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/banner/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/banner/Index.vue?vue&type=template&id=27941e4c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/banner/Index.vue?vue&type=template&id=27941e4c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27941e4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=27941e4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/banner/Index.vue?vue&type=template&id=27941e4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27941e4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_27941e4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
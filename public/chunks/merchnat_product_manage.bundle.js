(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merchnat_product_manage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/Navbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/merchant/Navbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
    this.$store.dispatch("merchant");
    this.$store.dispatch("general_setting");
  },
  data: function data() {
    return {
      merchant: {},
      base_url: this.$store.state.image_base_link
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios.get('/api/merchant/logout').then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          localStorage.removeItem('merchant_token');

          _this.$store.commit('merchant', null);

          _this.$router.push({
            name: 'merchant_login'
          });

          _this.$toasted.show("Logout successfully ! login again to come back .", {
            type: "error",
            position: "top-center",
            duration: 10000
          });
        }
      })["catch"]();
    }
  },
  computed: {
    getMerchant: function getMerchant() {
      return this.$store.getters.merchant;
    },
    general_setting: function general_setting() {
      return this.$store.getters.general_setting;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/product/Menage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/merchant/product/Menage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ "./resources/js/components/merchant/Navbar.vue");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
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

    this.productList();
    setTimeout(function () {
      _this.loading = false;
    }, 500); //this.interval = setInterval(() => this.productList(), 3000 );
  },
  data: function data() {
    return {
      products: {},
      loading: true,
      basePath: this.$store.state.image_base_link,
      search: "",
      item: "30",
      status: "all"
    };
  },
  methods: {
    productList: function productList() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$Progress.start();
      axios.get("/api/merchant/products?page=" + page, {
        params: {
          status: this.status,
          item: this.item
        }
      }).then(function (resp) {
        console.log(resp);
        _this2.products = resp.data.products;

        _this2.$Progress.finish();
      })["catch"](function (error) {
        console.log(error);

        _this2.$Progress.finish();
      });
    },
    productSearch: function productSearch() {
      var _this3 = this;

      if (this.search.length > 3) {
        this.$Progress.start();
        this.loading = true;
        axios.get("/api/merchant/search/product/" + this.search).then(function (resp) {
          console.log(resp);

          if (resp.data.status == "SUCCESS") {
            _this3.products = resp.data.products;
            _this3.loading = false;

            _this3.$Progress.finish();
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        this.productList();
      }
    } // delete_product(product_id) {
    //      axios.get('/api/merchant/delete/product/'+product_id)
    //      .then(resp =>{
    //        if (resp.data.success == "OK") {
    //        }
    //      })
    // },

  },
  components: {
    navbar: _Navbar__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dropbtn[data-v-3600ef55] {\r\n  width: 100% !important;\r\n  margin-bottom: 5px !important;\n}\n.dropbtn-active[data-v-3600ef55] {\r\n  display: block !important;\n}\n.dropdown-action[data-v-3600ef55] {\r\n  display: none;\r\n  width: 90px;\r\n  position: absolute;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/Navbar.vue?vue&type=template&id=7a0d4f5c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/merchant/Navbar.vue?vue&type=template&id=7a0d4f5c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("header", { staticClass: "main-header" }, [
      _c("a", { staticClass: "logo", attrs: { href: "" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c("span", { staticClass: "logo-lg" }, [
          _c("b", [_vm._v(_vm._s(_vm.general_setting.title))])
        ])
      ]),
      _vm._v(" "),
      _c("nav", { staticClass: "navbar navbar-static-top" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-custom-menu" }, [
          _c("ul", { staticClass: "nav navbar-nav" }, [
            _c("li", { staticClass: "dropdown user user-menu" }, [
              _c(
                "a",
                {
                  staticClass: "dropdown-toggle",
                  attrs: { href: "#", "data-toggle": "dropdown" }
                },
                [
                  _c("img", {
                    staticClass: "user-image",
                    attrs: { src: _vm.base_url + _vm.getMerchant.image }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "hidden-xs" }, [
                    _vm._v(_vm._s(_vm.getMerchant.name))
                  ])
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "dropdown-menu" }, [
                _c("li", { staticClass: "user-header" }, [
                  _c("img", {
                    staticClass: "img-circle",
                    attrs: {
                      src: _vm.base_url + _vm.getMerchant.image,
                      alt: "User Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.getMerchant.name) +
                        " - Merchant\n                "
                    ),
                    _c("small", [
                      _vm._v(
                        "Member since " + _vm._s(_vm.getMerchant.created_at)
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "user-footer" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-3" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary ",
                            attrs: { to: { name: "merchant_profile" } }
                          },
                          [_vm._v(" profile ")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary ",
                            attrs: { to: { name: "merchant_password_edit" } }
                          },
                          [_vm._v("change password")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger ",
                          on: { click: _vm.logout }
                        },
                        [_vm._v(" logout ")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "logo-mini" }, [
      _c("b", [_vm._v("A")]),
      _vm._v("LT")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "sidebar-toggle",
        attrs: { href: "#", "data-toggle": "push-menu", role: "button" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/product/Menage.vue?vue&type=template&id=3600ef55&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/merchant/product/Menage.vue?vue&type=template&id=3600ef55&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c("navbar"),
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
                  attrs: { to: { name: "merchant_product_add" } }
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
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-10" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.item,
                                expression: "item"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.item = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  return _vm.productList()
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "30" } }, [
                              _vm._v("30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "50" } }, [
                              _vm._v("50")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "100" } }, [
                              _vm._v("100")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "150" } }, [
                              _vm._v("150")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "200" } }, [
                              _vm._v("200")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search,
                              expression: "search"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "search with product code " },
                          domProps: { value: _vm.search },
                          on: {
                            keyup: function($event) {
                              return _vm.productSearch()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.search = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.status,
                                expression: "status"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.status = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                _vm.productList
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "all" } }, [
                              _vm._v("All")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("Approved")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Pending")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Deny")
                            ])
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("table", { staticClass: "table" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm.loading
                            ? _c("h1", { staticClass: "text-center" }, [
                                _c("i", {
                                  staticClass: "fa fa-spin fa-spinner"
                                })
                              ])
                            : _vm._l(_vm.products.data, function(
                                product,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c("td", { attrs: { scope: "row" } }, [
                                    _vm._v(_vm._s(index + 1))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(product.name))]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticStyle: { width: "100px" } },
                                    [
                                      _c("p", {
                                        staticClass: "barcode",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            product.product_barcode.barcode
                                          )
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "barcode-number" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              product.product_barcode
                                                .barcode_number
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(product.product_code))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product.product_image.length > 0
                                      ? _c("img", {
                                          staticClass: "table-image",
                                          attrs: {
                                            src:
                                              _vm.basePath +
                                              product.product_image[0]
                                                .product_image,
                                            alt: "product image"
                                          }
                                        })
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(product.sale_price))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "span",
                                      { staticClass: "badge badge-warning" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            product.discount
                                              ? product.discount
                                              : "0"
                                          )
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(product.price))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product.stock <= 5
                                      ? _c(
                                          "span",
                                          { staticClass: "badge badge-danger" },
                                          [_vm._v(_vm._s(product.stock))]
                                        )
                                      : _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-success"
                                          },
                                          [_vm._v(_vm._s(product.stock))]
                                        )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    product.status == 1
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-success"
                                          },
                                          [_vm._v("Approved")]
                                        )
                                      : product.status == 2
                                      ? _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-primary"
                                          },
                                          [_vm._v("Pending")]
                                        )
                                      : _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-warning"
                                          },
                                          [_vm._v("Deny")]
                                        )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-success ",
                                          attrs: {
                                            to: {
                                              name: "merchant_product_edit",
                                              params: { id: product.id }
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-edit"
                                          }),
                                          _vm._v(" Edit")
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
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c("pagination", {
                            attrs: { data: _vm.products, limit: 3 },
                            on: { "pagination-change-page": _vm.productList }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-lg-6 mt-1",
                          staticStyle: {
                            "margin-top": "25px",
                            "text-align": "right"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                      Showing\n                      "
                            ),
                            _c("strong", [_vm._v(_vm._s(_vm.products.from))]),
                            _vm._v(" to\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.products.to))]),
                            _vm._v(" of total\n                      "),
                            _c("strong", [_vm._v(_vm._s(_vm.products.total))]),
                            _vm._v(" entries\n                    ")
                          ])
                        ]
                      )
                    ])
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
          _vm._v("Dashboard ")
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "active" }, [_vm._v("Product Table")])
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Barcode")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("P_code")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Sale_price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("stock")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/merchant/Navbar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/merchant/Navbar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_7a0d4f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=7a0d4f5c& */ "./resources/js/components/merchant/Navbar.vue?vue&type=template&id=7a0d4f5c&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/merchant/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_7a0d4f5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_7a0d4f5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/merchant/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/merchant/Navbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/merchant/Navbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/merchant/Navbar.vue?vue&type=template&id=7a0d4f5c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/merchant/Navbar.vue?vue&type=template&id=7a0d4f5c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_7a0d4f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=7a0d4f5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/Navbar.vue?vue&type=template&id=7a0d4f5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_7a0d4f5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_7a0d4f5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/merchant/product/Menage.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/merchant/product/Menage.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menage_vue_vue_type_template_id_3600ef55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menage.vue?vue&type=template&id=3600ef55&scoped=true& */ "./resources/js/components/merchant/product/Menage.vue?vue&type=template&id=3600ef55&scoped=true&");
/* harmony import */ var _Menage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menage.vue?vue&type=script&lang=js& */ "./resources/js/components/merchant/product/Menage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Menage_vue_vue_type_style_index_0_id_3600ef55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css& */ "./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Menage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menage_vue_vue_type_template_id_3600ef55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menage_vue_vue_type_template_id_3600ef55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3600ef55",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/merchant/product/Menage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/merchant/product/Menage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/merchant/product/Menage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/product/Menage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_style_index_0_id_3600ef55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/product/Menage.vue?vue&type=style&index=0&id=3600ef55&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_style_index_0_id_3600ef55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_style_index_0_id_3600ef55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_style_index_0_id_3600ef55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_style_index_0_id_3600ef55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_style_index_0_id_3600ef55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/merchant/product/Menage.vue?vue&type=template&id=3600ef55&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/merchant/product/Menage.vue?vue&type=template&id=3600ef55&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_template_id_3600ef55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menage.vue?vue&type=template&id=3600ef55&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/merchant/product/Menage.vue?vue&type=template&id=3600ef55&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_template_id_3600ef55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menage_vue_vue_type_template_id_3600ef55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
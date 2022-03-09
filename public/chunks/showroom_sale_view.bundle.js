(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showroom_sale_view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/Navbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outlet/Navbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$store.dispatch("outlet");
  },
  data: function data() {
    return {
      base_url: this.$store.state.image_base_url
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios.get('/api/manager/logout').then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          localStorage.removeItem('outlet_token');

          _this.$store.commit('outlet', null);

          _this.$router.push({
            name: 'outlet_login'
          });

          _this.$toasted.show("Logout successfully ! login again to come back .", {
            type: "error",
            position: "top-center",
            duration: 10000
          });
        }
      });
    }
  },
  computed: {
    outlet: function outlet() {
      return this.$store.getters.outlet;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/sale/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outlet/sale/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar.vue */ "./resources/js/components/outlet/Navbar.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.getDetails();
  },
  data: function data() {
    return _defineProperty({
      sale: "",
      items: "",
      setting: "",
      loading: true,
      base_url: this.$store.state.image_base_link
    }, "loading", true);
  },
  methods: {
    getDetails: function getDetails() {
      var _this = this;

      axios.get("/api/sale/details/" + this.$route.params.id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "SUCCESS") {
          _this.sale = resp.data.sale;
          _this.items = resp.data.sale_items;
          _this.setting = resp.data.showroom;
          _this.loading = false;
        } else {
          _this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      });
    },
    showroom_sale_price: function showroom_sale_price() {},
    print: function print(sale_id) {
      window.open('/api/print/sale/recipient/' + sale_id, '_SELF');
    },
    // smallPrint(sale_id) {
    //    window.open('/api/invoice/small/print/'+sale_id,'_SELF')
    //   },
    formateDate: function formateDate(date) {
      var d = new Date(date);
      var month = d.getMonth();
      var day = d.getDate();
      var year = d.getFullYear();
      var output = (("" + day).length < 2 ? "0" : "") + day + "-" + (("" + month).length < 2 ? "0" : "") + month + "-" + year;
      return output;
    }
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a,
    navbar: _Navbar_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mb-2[data-v-a1bcd654] {\r\n  margin-bottom: 5px !important;\n}\n.bottomBtn[data-v-a1bcd654] {\r\n  margin-top: 15px;\r\n  margin-left: 20px;\n}\n.head_title[data-v-a1bcd654]{\r\n    margin-left: 27px;\r\n    margin-top: -12px;\n}\n.address_line[data-v-a1bcd654]{\r\n  line-height: 15px;\n}\np[data-v-a1bcd654] {\r\n  line-height: 10px;\r\n  font-size:14px;\n}\n.m_logo[data-v-a1bcd654]{\r\n    margin-left: -11px;\r\n    margin-top: -21px;\r\n    height: 80px;\n}\n.m_title[data-v-a1bcd654]{\r\n  margin-top:-15px;\r\n  font-size: 11px;\n}\ntable[data-v-a1bcd654] {\r\n  margin-top:20px;\n}\n@media print {\n*[data-v-a1bcd654]{\r\n    margin: 0;\r\n    padding: 0;\n}\ntable[data-v-a1bcd654] {\r\n  margin-top:20px !important;\n}\n.m_title[data-v-a1bcd654]{\r\n    margin-top:-15px;\r\n   font-size: 10px;\n}\n.navbar[data-v-a1bcd654] {\r\n    display: none;\n}\n.m_logo[data-v-a1bcd654]{\r\n    height: 80px;\n}\n.print_info_container[data-v-a1bcd654]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 10px 10px  !important;\r\n    margin-top: 20px;\n}\n.col-sm-1[data-v-a1bcd654]{\r\n    display: none;\n}\n.address_line[data-v-a1bcd654]{\r\n  line-height: 15px;\n}\np[data-v-a1bcd654]{\r\n    line-height: 16px;\r\n    font-size: 14px;\n}\n.logo[data-v-a1bcd654]{\r\n      width: 40% !important;\n}\n.description[data-v-a1bcd654]{\r\n   width: 40%  !important;\n}\n.col-lg-2[data-v-a1bcd654] {\r\n    width: 20% !important;\r\n    margin-top: 20px !important;\n}\n.invoice-header[data-v-a1bcd654] {\r\n    display: block;\n}\n.box[data-v-a1bcd654] {\r\n    border-top: none;\n}\nfooter[data-v-a1bcd654] {\r\n    border-top: none !important;\n}\n.bottomBtn[data-v-a1bcd654] {\r\n    display: none;\n}\n}\nsmall.badge.badge-danger[data-v-a1bcd654] {\r\n    display: flex;\r\n    background: red;\r\n    width: 63px;\r\n    flex-direction: row;\n}\nsmall.badge.badge-success[data-v-a1bcd654] {\r\n    display: flex;\r\n    background: green;\r\n    width: 63px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/Navbar.vue?vue&type=template&id=6e927b37&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outlet/Navbar.vue?vue&type=template&id=6e927b37& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
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
                    attrs: { src: _vm.base_url + _vm.outlet.image }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "hidden-xs" }, [
                    _vm._v(_vm._s(_vm.outlet.name))
                  ])
                ]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "dropdown-menu" }, [
                _c("li", { staticClass: "user-header" }, [
                  _c("img", {
                    staticClass: "img-circle",
                    attrs: {
                      src: _vm.base_url + _vm.outlet.image,
                      alt: "User Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.outlet.name) +
                        " - outlet\n                "
                    ),
                    _c("small", [
                      _vm._v(" since " + _vm._s(_vm.outlet.created_at))
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
                            attrs: { to: { name: "outlet_profile" } }
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
                            attrs: { to: { name: "outlet_password_edit" } }
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
    return _c("a", { staticClass: "logo", attrs: { href: "#" } }, [
      _c("span", { staticClass: "logo-mini" }, [
        _c("b", [_vm._v("A")]),
        _vm._v("LT")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "logo-lg" }, [_c("b", [_vm._v("Outlet")])])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/sale/View.vue?vue&type=template&id=a1bcd654&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outlet/sale/View.vue?vue&type=template&id=a1bcd654&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        _c("section", { staticClass: "content-header" }),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-10" }, [
                _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("div", { staticClass: "row print_info_container" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-3 col-sm-3 description" },
                        [
                          _c("div", [
                            _c("p", [
                              _vm._v(
                                "Name: " + _vm._s(_vm.sale.customer_name) + "  "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("\n                      Mobile No: "),
                              _c("strong", [
                                _vm._v(
                                  " " + _vm._s(_vm.sale.customer_phone) + " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "address_line" }, [
                              _vm._v(
                                "\n                      Address:\n\n                      "
                              ),
                              _c("span", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.sale.customer_address
                                        ? _vm.sale.customer_address
                                        : "no address"
                                    ) +
                                    "\n                      "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("Invoice No: "),
                              _c("strong", [
                                _vm._v(
                                  " " + _vm._s("S-" + _vm.sale.invoice_no) + " "
                                )
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3 col-sm-3 logo" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-4 col-sm-4 address",
                          staticStyle: { "margin-left": "27px" }
                        },
                        [
                          _c("h5", [_vm._v(_vm._s(_vm.setting.name))]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              " Address: " + _vm._s(_vm.setting.address) + " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              " Phone : " +
                                _vm._s(_vm.setting.contact_number) +
                                " "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                      Date: " +
                                _vm._s(_vm.formateDate(_vm.sale.created_at)) +
                                "\n                    "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-1 col-sm-1" })
                    ]),
                    _vm._v(" "),
                    _vm.loading
                      ? _c("h1", [
                          _c("i", { staticClass: "fa fa-spin fa-spinner" })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-centered table-bordered table-hover table-striped "
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Product")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Image")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Size")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Code")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Qty")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Price")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Total")]),
                            _vm._v(" "),
                            _vm.sale.status == 4 ? _c("th") : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.items, function(item, index) {
                              return _c("tr", { key: index }, [
                                _c("td", [
                                  _vm._v(
                                    _vm._s(index + 1) +
                                      "\n\n                          "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(item.product.name) +
                                      "\n                             "
                                  ),
                                  _vm.sale.status == 4 || _vm.sale.status == 5
                                    ? _c("div", [
                                        item.status == 2
                                          ? _c(
                                              "small",
                                              {
                                                staticClass:
                                                  "badge badge-danger"
                                              },
                                              [_vm._v("Returned")]
                                            )
                                          : _vm._e()
                                      ])
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  item.product.product_image.length > 0
                                    ? _c("img", {
                                        staticStyle: {
                                          width: "60px",
                                          height: "50px"
                                        },
                                        attrs: {
                                          src:
                                            _vm.base_url +
                                            item.product.product_image[0]
                                              .product_image
                                        }
                                      })
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("strong", [
                                    item.variant
                                      ? _c("b", [
                                          _vm._v(
                                            "[" +
                                              _vm._s(item.variant.name) +
                                              "]"
                                          )
                                        ])
                                      : _c("b", [_vm._v("-")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(item.product.product_code))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.quantity))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.price))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.total))]),
                                _vm._v(" "),
                                _vm.sale.status == 4 && item.status == 1
                                  ? _c("td", [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "badge badge-danger",
                                          staticStyle: { cursor: "pointer" },
                                          on: {
                                            click: function($event) {
                                              return _vm.itemReturn(item.id)
                                            }
                                          }
                                        },
                                        [_vm._v("Return")]
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            }),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { attrs: { colspan: "6" } }),
                              _vm._v(" "),
                              _vm._m(0),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", [_vm._v(_vm._s(_vm.sale.total))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { attrs: { colspan: "6" } }),
                              _vm._v(" "),
                              _vm._m(1),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", [_vm._v(_vm._s(_vm.sale.discount))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { attrs: { colspan: "6" } }),
                              _vm._v(" "),
                              _vm._m(2),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", [_vm._v(_vm._s(_vm.sale.paid))])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { attrs: { colspan: "6" } }),
                              _vm._v(" "),
                              _vm._m(3),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", [
                                  _vm._v(_vm._s(parseInt(_vm.sale.due_amount)))
                                ])
                              ])
                            ])
                          ],
                          2
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-lg-2",
                          staticStyle: {
                            "margin-left": "27px",
                            "text-align": "center"
                          }
                        },
                        [
                          _vm.sale.approved_by != null
                            ? _c(
                                "h6",
                                { staticStyle: { "margin-bottom": "0" } },
                                [_vm._v(_vm._s(_vm.sale.approved_by.name))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._m(4)
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row bottomBtn" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-warning back",
                            attrs: { to: { name: "showroom_sale" } }
                          },
                          [_c("i", { staticClass: "fa fa-arrow-circle-left" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success print",
                            on: {
                              click: function($event) {
                                return _vm.print(_vm.sale.id)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-print" }),
                            _vm._v(" print\n                  ")
                          ]
                        )
                      ],
                      1
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
    return _c("td", [_c("b", [_vm._v("Sub Total")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Discount")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Paid")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Amount Due")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h5",
      { staticStyle: { "bsale-top": "2px dotted #000", "margin-top": "25" } },
      [_c("strong", [_vm._v("Approved By")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/outlet/Navbar.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/outlet/Navbar.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6e927b37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6e927b37& */ "./resources/js/components/outlet/Navbar.vue?vue&type=template&id=6e927b37&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/outlet/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6e927b37___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6e927b37___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/outlet/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/outlet/Navbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/outlet/Navbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/outlet/Navbar.vue?vue&type=template&id=6e927b37&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/outlet/Navbar.vue?vue&type=template&id=6e927b37& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6e927b37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6e927b37& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/Navbar.vue?vue&type=template&id=6e927b37&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6e927b37___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6e927b37___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/outlet/sale/View.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/outlet/sale/View.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_a1bcd654_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=a1bcd654&scoped=true& */ "./resources/js/components/outlet/sale/View.vue?vue&type=template&id=a1bcd654&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/outlet/sale/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _View_vue_vue_type_style_index_0_id_a1bcd654_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css& */ "./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_a1bcd654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_a1bcd654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a1bcd654",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/outlet/sale/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/outlet/sale/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/outlet/sale/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/sale/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_a1bcd654_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/sale/View.vue?vue&type=style&index=0&id=a1bcd654&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_a1bcd654_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_a1bcd654_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_a1bcd654_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_a1bcd654_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_a1bcd654_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/outlet/sale/View.vue?vue&type=template&id=a1bcd654&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/outlet/sale/View.vue?vue&type=template&id=a1bcd654&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_a1bcd654_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=a1bcd654&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outlet/sale/View.vue?vue&type=template&id=a1bcd654&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_a1bcd654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_a1bcd654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);